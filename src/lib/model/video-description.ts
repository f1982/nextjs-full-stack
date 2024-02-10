import { askGptWithCache } from '../gpt'
import { promptRequirements } from './prompt-segments'
import { z } from 'zod'

export const validator = z.object({
  data: z.array(z.string().min(20).max(2000)).min(3),
})

export function getPrompt(topic: string): string {
  return `
为一个关于 "${topic}" 的视频生成 YouTube 视频简介。

以簡短、引人入勝的介紹開始，吸引觀眾的注意。
在前幾句話中自然地加入3-5个相關 YouTube SEO關鍵字，格式类似： #关键词1 #关键词2。 

写一句关于话题的名言。要求内容真实有出处。最好是书籍或者演讲里提及

更詳細地闡述影片的內容。
在整個描述中自然地包含其他相關關鍵字。

鼓勵觀眾按讚、留言、分享和訂閱。

提出問題或徵求觀眾的意見以鼓勵評論。

${promptRequirements.outputFormat()}
  
{
  "data": ["第一段","第二段","第三段","第四段", ...]
}

`
}

export async function generateVideoDescription(topic: string) {
  const prompt = getPrompt(topic)
  let result = await askGptWithCache({ prompt, validator })
  return result.data.join('\n')
}
