'use server'

import { cache } from './file-cache'
import { sleep } from './utils'
import md5 from 'md5'
import OpenAI from 'openai'
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam
} from 'openai/resources'
import { z } from 'zod'

export type LangOptions = 'zh' | 'en'

const gptApiKey = process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY
const gptModel = process.env.OPENAI_MODEL || process.env.VITE_OPENAI_MODEL

const openai = new OpenAI({
  apiKey: gptApiKey,
  timeout: 10 * 60 * 1000,
  dangerouslyAllowBrowser: true
})

export async function askGpt(prompt: string) {
  const messages: Array<ChatCompletionMessageParam> = []
  // messages.push({ role: 'system', content: systemContent })
  messages.push({ role: 'user', content: prompt })

  const chatCompletion = await openai.chat.completions
    .create(
      {
        messages,
        model: gptModel!,
        temperature: 0.9
      },
      { maxRetries: 3 }
    )
    .catch((error) => {
      if (error instanceof OpenAI.APIError) {
        console.log(error)
      } else {
        throw error
      }
    })
  return chatCompletion?.choices[0]?.message?.content
}

/**
 * Get gpt with json
 * @param prompt
 * @returns
 */
export async function getGptJson({
  prompt,
  system,
  jsonFormat = true
}: {
  prompt: string
  system: string
  jsonFormat: boolean
}): Promise<any> {
  // const systemContent = `你是個出色的講懸疑故事的科普作家，懂得非常多的物理和靈性知識，擅長查找互聯網資料。寫過很多讓人喜歡和好奇的作品。`

  const messages: Array<ChatCompletionMessageParam> = []
  if (system) {
    messages.push({ role: 'system', content: system })
  }
  messages.push({ role: 'user', content: prompt })

  const parameters: ChatCompletionCreateParamsNonStreaming = {
    messages,
    model: gptModel!,
    temperature: 0.8, //lower, more consistent
    max_tokens: 4096
  }
  if (jsonFormat) {
    Object.assign(parameters, { response_format: { type: 'json_object' } })
  }

  const chatCompletion = await openai.chat.completions
    .create(parameters, { maxRetries: 3 })
    .catch((error) => {
      if (error instanceof OpenAI.APIError) {
        console.log(error)
      } else {
        throw error
      }
    })

  if (chatCompletion?.choices[0]?.finish_reason === 'length') {
    throw new Error('reach the length token limitation')
  }

  try {
    if (jsonFormat) {
      console.log(
        'chatCompletion?.choices[0]?.message?',
        chatCompletion?.choices[0]?.message
      )
      return JSON.parse(chatCompletion?.choices[0]?.message?.content!)
    } else {
      return chatCompletion?.choices[0]?.message?.content!
    }
  } catch (parseError) {
    throw parseError
  }
}

const maxRetryTimes = 3
let retryCount = 0

export async function askGptWithValidator({
  prompt,
  validator,
  system,
  jsonFormat = true
}: {
  prompt: string
  validator: z.ZodObject<any>
  system: string
  jsonFormat: boolean
}) {
  console.log('prompt', prompt)
  const result = await getGptJson({ prompt, system, jsonFormat })
  console.log('getGptJson result: ', result)

  //TODO: change to safe parse
  try {
    validator.parse(result)
    return result
  } catch (error) {
    console.log('error: ', error)

    if (retryCount < maxRetryTimes) {
      retryCount++
      console.log('retryCount', retryCount)
      await sleep(2000)
      await askGptWithValidator({ prompt, validator, system, jsonFormat })
    } else {
      throw new Error(
        'can not get validated data from gpt, you may need to update the prompt'
      )
    }
  }
}

export async function askGptWithCache({
  prompt,
  validator,
  ttl = 60 * 60,
  system = '',
  jsonFormat = true
}: {
  prompt: string
  validator?: z.ZodObject<any> | null
  ttl?: number
  system?: string
  jsonFormat?: boolean
}) {
  //TODO: md5 is enough usage here, but better way is to use sha256
  const cacheKey = md5(prompt)
  console.info('cacheKey', cacheKey)

  const cacheResult = await cache.get(cacheKey)
  if (cacheResult && ttl > 0) {
    console.info('✅ Result from cache')
    return cacheResult
  }

  const result = validator
    ? await askGptWithValidator({ prompt, validator, system, jsonFormat })
    : await getGptJson({ prompt, system, jsonFormat })

  if (result) {
    await cache.set(cacheKey, result, ttl)
    return result
  }
  return null
}

export async function youtubeScriptWriter({
  prompt,
  validator = null,
  ttl = 60 * 60,
  lang = 'zh',
  jsonFormat = true
}: {
  prompt: string
  validator?: z.ZodObject<any> | null
  ttl?: number
  lang?: LangOptions
  jsonFormat?: boolean
}) {
  const system = `作為一位卓越的科普作家，你擅長結合深厚的物理知識和引人入勝的民間傳說，以創作引人入勝的懸疑故事。你善於在互聯網上迅速查找並整理出色的資料，將其融入你的文章中。你的作品充滿實用知識，引發讀者的好奇心，經常寫出讓人喜愛和著迷的作品。`
  return await askGptWithCache({ prompt, validator, ttl, system, jsonFormat })
}
