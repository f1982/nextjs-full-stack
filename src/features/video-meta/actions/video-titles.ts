'use server'

import { z } from 'zod'

import { cache } from '@/lib/file-cache'

import { LangOptions, askGptWithCache } from '../../../lib/gpt'
import { promptRequirements } from '../../../lib/prompt-segments'

const validator = z.object({
  titles: z.array(z.string().min(3).max(200)).min(2),
})

function getPrompt(
  topic: string,
  count: number = 10,
  lang: LangOptions = 'zh',
): string {
  const zh = `
为一个YouTube 视频生成 ${count} 个吸引眼球，诱发点击的标题，标题包含热门 YouTube SEO 热门关键词。

这个视频是关于：

"""
${topic}
"""
`
  const en = `
Generate ${count} attention-grabbing, click-inducing titles for a YouTube video, including popular YouTube SEO keywords.

This video is about:
 
"""
${topic}
"""
`
  return `
${lang === 'en' ? en : zh}

${promptRequirements.outputFormat(lang)}
  
{
  "titles": ["",""]
}
`
}

export async function generateVideoTitles(
  topic: string,
  count: number = 10,
  lang: LangOptions = 'zh',
) {
  const prompt = getPrompt(topic, count, lang)
  // console.log('prompt', prompt)
  let result = await askGptWithCache({ prompt, validator, jsonFormat: true })
  return result.titles
}

export async function genTitles(
  topic: string,
  count: number = 10,
  lang: LangOptions = 'zh',
) {
  const titles = await generateVideoTitles(topic, count, lang)
  cache.set('tempTitles', titles)
  return titles
}

export async function getSelectedTopic(videoId: string) {
  return await cache.get('selectedTopic_' + videoId)
}
