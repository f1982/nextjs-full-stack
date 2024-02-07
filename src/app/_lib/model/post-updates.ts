import { askGptWithCache } from '../gpt'
import { z } from 'zod'

const validator = z.object({
  data: z.array(
    z.object({
      content: z.string().min(10)
    })
  )
})

export function getPrompts(topic: string, count: number = 5): string {
  let prompt = ''
  prompt += `Act as if you're social media expert.`
  prompt += `Give me ${count} tweet thread based on the following youtube content: ${topic}.`
  prompt +=
    'The thread should be optimised for virality and contain hastags and emojis.'
  prompt += `All the tweets should in Cantonese, and not exceed 260 characters in length.`
  prompt +=
    'Output following JSON format and please do proper escape processing for the content.'
  prompt += `
  
  {
    "data":[
      {"content":"文本內容"},
      {"content":"文本內容"}
    ]
  }
  
  `
  return prompt
}

export async function generatePostUpdate(topic: string, count: number = 5) {
  const prompt = getPrompts(topic, count)
  let result = await askGptWithCache({ prompt, validator, jsonFormat: true })
  return result.data
}
