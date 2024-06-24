import { askGptWithCache } from '@/lib/gpt'
import { promptRequirements } from '@/lib/prompt-segments'
import { z } from 'zod'

const validator = z.object({
  data: z
    .array(
      z.object({
        content: z.string().min(2),
        explanation: z.string().min(2),
      }),
    )
    .min(1),
})

export function getPrompt(concept: string, count: number = 3): string {
  return `
假设 "${concept}" 这个话题有突破性的发展，可能会是什么?
找 ${count} 個不同的方面，分別展望一下。

- explanation: 對內容進行詳細的說明，字數大於 100字。 

${promptRequirements.outputFormat()}

輸出內容 JSON 格式例子如下: 

"""
{
  "data": [{"content": "文本內容1", "explanation": ""}, {"content": "文本內容2","explanation": ""}] 
}
"""

`
}

export async function generateOutlooks(topic: string) {
  const prompt = getPrompt(topic)
  let result = await askGptWithCache({ prompt, validator })
  return result.data.map((item: any) => item.explanation).join('\n')
}
