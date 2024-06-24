'use server'

import { askGptWithCache } from '../../../lib/gpt'

function getPrompt(topic: string, count: number): string {
  return `
写一个字数在${count} 左右的段落，让所给话题吸引用户的注意力，可以用下面的几种方式。

- 介绍话题的重要性
- 提出关于话题的重要问题
- 话题对于人类的意义
- 反常识的点
- 告诉用户后面的重要内容

这个话题是关于:
"""
${topic}
"""
`
}

export async function generateScriptHook(topic: string, count: number = 200) {
  const prompt = getPrompt(topic, count)
  let result = await askGptWithCache({ prompt, jsonFormat: false })
  return result
}
