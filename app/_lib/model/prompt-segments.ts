import { LangOptions } from '../gpt'

// TODO
export const promptRequirements = {
  // Format requirement
  outputFormat: (lang: LangOptions = 'zh') => {
    if (lang === 'zh') {
      return `請提供以 "JSON" 数据格式输出的数据，其中 JSON 數據 "值" 的部分应以繁体中文呈现。`
    }
    return 'Please provide data output in "JSON" data format.'
  },
  // Content requirement
  content: (lang: LangOptions = 'zh') => {
    if (lang === 'zh') {
      return `
用“客观叙述"或"事实陈述"的寫法。 提供事实、事件、观点，要求书写精炼、实用、可信的内容
適當的引用書籍和論文中的觀點，評論或者故事。

而不涉及作者的主观意见、评价或态度。
不需要添加“意義”，“影響”，“引发人们的好奇和讨论”，“激發思考”，“總的來說”，“總之” 類似的描述。
.`
    }
    return `
Please ensure that the writing style is lively, interesting, fluent.
It is required to write concise, practical and credible content.
    `
  },
  // No repeat topic requirement
  noRepeatTopic: (topic: string, lang: LangOptions = 'zh') => {
    if (lang === 'zh') {
      return `
無需對 “${topic}” 的核心概念,現象,人物進行解釋，因爲這些已經包含在文章其他位置。
      `
    }
    return `
There is no need to explain the core concepts, phenomena, and characters of "${topic}" because these are already included elsewhere in the article.
    `
  }
}
