import { askGptWithCache } from '@/lib/gpt'
import { promptRequirements } from '@/lib/prompt-segments'
import { z } from 'zod'

const validator = z.object({
  data: z.array(
    z.object({
      work: z.string().min(2),
      summary: z.string().min(20),
      year: z.string().min(2),
      author: z.string(),
    }),
  ),
})

export type Derivative = {
  work: string
  summary: string
  year: string
  author: string
}

export const getDerivativeItemDesc = (d: Derivative) => {
  return d.work + '\n' + d.summary + '\n' + d.year + '\n' + d.author + '\n'
}

export function getPrompt(concept: string, count: number = 5): string {
  return `
分析。输出关于 "${concept}" 这个话题的 ${count}个衍生作品，可以是小說, 電影，遊戲, 動畫。
要求内容真实，并在互谅网上有足够的信息。
按照时间顺序排序

${promptRequirements.outputFormat()}

例子如下: 

{
  "data": [
    {
      "work": ""
      "summary": ""
      "year": ""
      "author": ""
    }
  ]
}

`
}

export async function generateDerivatives(
  topic: string,
): Promise<Derivative[]> {
  const prompt = getPrompt(topic)
  let result = await askGptWithCache({ prompt, validator })
  return result.data
}
