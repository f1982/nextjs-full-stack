import { askGptWithCache } from '@/lib/gpt'
import { promptRequirements } from '@/lib/prompt-segments'

export function getPrompt(
  event: string,
  topic: string,
  count: number = 500,
): string {
  const outputRequirements = `
${promptRequirements.outputFormat()}

輸出內容 JSON 格式例子如下: 

{
  "data": ["文本內容1"]
}`

  return `
請對我提供的內容進行詳細擴展，寫出一段文本，文本長度請達到或者超過 ${count} 個字。

${promptRequirements.content()}

擴展內容可以根據題材包括但是不限於:

- 內容中關鍵數據，有趣的細節，並進行詳細描述
- 如果內容中有除了 “${topic}” 的新概念引入，詳細解釋概念內容
- 適當使用比喻，或者舉例子來幫助讀者理解複雜概念
- 內容細節或者人物經歷的詳細描述(如果存在的話)

無需對 “${topic}” 的核心概念,現象,人物進行解釋，因爲這些已經包含在文章其他位置。
不需要添加“意義”，“影響”，“引发人们的好奇和讨论”，“激發思考”，“總的來說”，“總之” 類似的描述。

這次需要擴展的內容是：

"""
${event}
""" 
`
}

export async function generateEventExtend(
  topic: string,
  event: string,
  count: number = 500,
) {
  const prompt = getPrompt(topic, event, count)

  let result = await askGptWithCache({ prompt, jsonFormat: false })
  return result
}
