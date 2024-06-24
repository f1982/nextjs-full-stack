import { LangOptions, youtubeScriptWriter } from '@/lib/gpt'

function getPromptEn(content: string, count: number = 500): string {
  return `
Create a brief, compelling narrative of approximately  ${count} words that describes the core storyline, including main characters, central conflicts, and primary objectives. Emphasize the uniqueness and distinctive features of the work, such as special visual effects, innovative plotlines, unique gameplay mechanics, or captivating character development. Maintain an air of mystery to pique the reader's curiosity.

The content revolves around: 

"""
"${content}"
"""
`
}

function getPromptCn(content: string, count: number = 500): string {
  return `
对提供作品进行扩展。输出 ${count} 个字左右的短文。

闡述主要故事線，包括主要角色、核心衝突和作品的獨特之处。

作品內容是關於：
"""
${content}
"""
`
}

export async function generateDerivativeExtend(
  content: string,
  count: number = 500,
  lang: LangOptions = 'zh',
) {
  const prompt =
    lang === 'zh' ? getPromptCn(content, count) : getPromptEn(content, count)
  console.log('prompt', prompt)

  let result = await youtubeScriptWriter({
    prompt,
    lang,
    jsonFormat: false,
  })
  return result
}
