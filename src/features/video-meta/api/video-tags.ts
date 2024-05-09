import { LangOptions, askGptWithCache } from '../../../lib/gpt'
import { promptRequirements } from '../../../lib/prompt-segments'
import { z } from 'zod'

const keywordsValidator = z.array(z.string().min(2)).min(3)
export const validator = z.object({
  data: z.object({
    twTags: keywordsValidator,
    enTags: keywordsValidator,
  }),
})

function generatePrompt(
  topic: string,
  count: number,
  lang: LangOptions,
): string {
  const en = `
Please generate ${count} Traditional Chinese SEO keywords and ${count} SEO English keywords for the video.
This video is about: 
`
  const zh = `
请您为视频生成 ${count} 个 繁体中文 SEO 关键词和 ${count} SEO 英文关键词。 
这个视频是关于：
`
  return `
${lang === 'en' ? en : zh}

"""
${topic} 
"""

${promptRequirements.outputFormat(lang)}

{
  "data": {
    "enTags": ["", ""],
    "twTags": ["", ""]
  }
}
`
}

export async function generateVideoTags(
  topic: string,
  count: number = 10,
  lang: LangOptions = 'zh',
) {
  const prompt = generatePrompt(topic, count, lang)
  const result = await askGptWithCache({ prompt, validator })

  const { twTags, enTags } = result.data
  return [...twTags, ...enTags].join(', ')
}
