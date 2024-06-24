import { askGptWithCache } from '../../../lib/gpt'

export function getPrompt(topic: string): string {
  const outlinePoints = `
這將有助於激發觀眾的興趣，並逐漸深入討論話題： 

- 引入話題 開始視頻的大綱時，先引入話題。用一兩句話簡要概述話題的重要性，激發觀眾的好奇心。 
- 分析重要概念和名詞術語 首先，解釋該話題的重要概念和名詞術語。這將幫助觀眾理解話題的核心要點。 
- 探索話題的歷史和演變 探討該話題的歷史和演變過程。從其起源開始，概括其重要時刻，事件或進化階段。 
- 介紹重要貢獻者和相關论文和著作 
- 分析相關衍生作品。 深入分析與話題相關的重要故事、都市傳說和文學作品。解釋它們的情節、主題和與話題的聯繫。
- 探討話題對社會和個人的影響與意義 探討該話題對社會和個人的影響，以及其在日常生活中的意義。這可以包括文化、社會和個人層面的影響。 
- 展望未來發展和趨勢 討論該話題的未來預測和發展方向。這可以涵蓋可能的趨勢、技術或社會變革，對話題的潛在影響。


段落內容要具體，包含關鍵的觀點，講解，人物，事件，故事等。
如果段落中有衍生的新概念，名詞，請詳細解釋。
舉例，或者用講故事的方式來講解一些複雜的概念。

`
  return `
作為一個優秀的YouTube視頻文案撰寫者，請你為特定話題創建视频大綱。

- 让视频內容有邏輯上的地進，有趣，唤起观众对于视频的好奇心，提高视频的完播率。
- 用“客观叙述"或"事实陈述"的寫法。 
- 請保證每個段落內容的獨特性。

這次我想讓你幫忙分析的話題是: 

"""
${topic}
"""

輸出邏輯段落间用 “---” 分割。 輸出內容的開頭和結尾不需要添加 “---”
例子如下：

"""

段落內容1
---
段落內容2
---
段落內容3

"""


`
}

export async function generateScriptOutline(topic: string) {
  const prompt = getPrompt(topic)
  let result = await askGptWithCache({ prompt, jsonFormat: false,ttl:0 })
  return result
}
