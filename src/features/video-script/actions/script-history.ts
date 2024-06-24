import { askGptWithCache } from '@/lib/gpt'
import { promptRequirements } from '@/lib/prompt-segments'
import { z } from 'zod'

const validator = z.object({
  data: z
    .array(
      z.object({
        event: z.string().min(2),
        description: z.string().min(20),
        year: z.string().min(2),
      }),
    )
    .min(3),
})

export const getHistoryItemDesc = (d: any) => {
  return d.year + '\n' + d.event + '\n' + d.description
}

export function getPrompt(concept: string, count: number = 5): string {
  return `
分析我給你的主題。請提供其發展過程中的 ${count} 個重要階段。

根據可靠資料, 分階段來描述主題相關內容：涵蓋關鍵時刻、重要觀點，人物、論文、書籍或特殊事件，以闡述其演變過程。

請避免使用太大跨度的時間範圍。

並按照時間順序進行排序。

${promptRequirements.outputFormat()}

這次的主題是關於

"""
${concept}
""" 

輸出的數據例子如下: 

"""
{
  "data": [
    {
      "event": ""
      "description": ""
      "year": ""
    }
  ]
}
"""

`
}

export async function generateScriptHistory(topic: string) {
  const prompt = getPrompt(topic)
  let result = await askGptWithCache({ prompt, validator })
  return result.data
}
