import { askGptWithCache } from '../../../lib/gpt'
import { promptRequirements } from '../../../lib/prompt-segments'
import { z } from 'zod'

const validator = z.object({
  data: z.array(
    z.object({
      author: z.string().min(2),
      quote: z.string().min(3),
      reference: z.string().min(2),
    }),
  ),
})

export const getQuoteItemDesc = (d: any) => {
  return d.author + '\n' + d.quote + '\n' + d.year + '\n' + d.reference + '\n'
}

export const getQuoteItemBrief = (d: any) => {
  // return d.author + '在 ' + d.reference + ' 裏提到 ' + d.quote
  return `"${d.quote}" ${d.author}`
}

export function getPrompts(topic: string, count: number = 5): string {
  return `
生成 ${count}个 关于 "${topic}" 的有意思的名人名言。要求内容真实有出处。最好是书籍或者演讲里提及。
按照名言的影响力从高到低排序。

${promptRequirements.outputFormat()}

例子如下: 

{
  "data": [
    { "author": "", "quote": "", reference: ""}
  ]
}

`
}

export async function generateScriptQuotes(topic: string, count: number = 5) {
  const prompt = getPrompts(topic, count)
  let result = await askGptWithCache({ prompt, validator, jsonFormat: true })
  return result.data
}
