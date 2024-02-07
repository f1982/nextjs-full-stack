import { LangOptions, askGptWithCache } from '../gpt'
import { promptRequirements } from './prompt-segments'
import { z } from 'zod'

export const validator = z.object({
  titles: z.array(z.string().min(3).max(200)).min(2)
})

export function getPrompt(
  topic: string,
  count: number = 10,
  lang: LangOptions = 'zh'
): string {
  const zh = `
为一个YouTube 视频生成 ${count} 个猫腻的标题。

- 要求标题独特且吸引人，直白简单但是又很具体。
- 標題長度在15字以上
- 标题里包含热门 SEO 关键词，并有激励性或者疑问性，可以适当使用诱导性语句，可以带数字。

这个视频是关于：

"""
${topic}
"""
`
  const en = `
Generate ${count} fun YouTube video titles.
- The title is required to be unique and attractive, straightforward and simple yet specific.
- The title must be longer than 15 words
- The title contains popular SEO keywords and is motivating or questioning. 
- You can use inductive sentences appropriately and can include numbers.
The video is about
 
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
  lang: LangOptions = 'zh'
) {
  const prompt = getPrompt(topic, count, lang)
  // console.log('prompt', prompt)
  let result = await askGptWithCache({ prompt, validator, jsonFormat: true })
  return result.titles
}
