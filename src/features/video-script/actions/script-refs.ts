import { askGptWithCache } from '@/lib/gpt'
import { promptRequirements } from '@/lib/prompt-segments'
import { z } from 'zod'

export type Contributor = {
  contributor: string
  explanation: string
  works: string[]
}

export const getContributorItemDesc = (contributor: Contributor) => {
  return (
    contributor.contributor +
    '\n' +
    contributor.explanation +
    '\n' +
    contributor.works.join(', ')
  )
}

const validator = z.object({
  data: z.array(
    z.object({
      contributor: z.string().min(2),
      explanation: z.string().min(10),
      works: z.array(z.string().min(2)).min(1),
    }),
  ),
})
export function generateContributorPrompt(
  topic: string,
  count: number,
): string {
  return `
为一个关于 "${topic}" 的话题生成該話題相关的 ${count} 个重要貢獻者.

介紹他們对应的贡献者的理论，论文或者书籍

${promptRequirements.outputFormat()}
其中要求
- contributor 字段裏包含貢獻者的英文和中文名。
- explanation 字段裏的字符長度要大於 100。

例子如下: 

{
  "data": [
    { "contributor": "", "explanation": "", works:["",""] },
    { "contributor": "", "explanation": "",, works:["",""] }
  ]
}

`
}

export async function generateContributor(
  topic: string,
  count: number = 3,
): Promise<Contributor[]> {
  const prompt = generateContributorPrompt(topic, count)
  let result = await askGptWithCache({ prompt, validator })
  return result.data
}
