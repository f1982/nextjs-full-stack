import { askGptWithCache } from '@/lib/gpt'
import { promptRequirements } from '@/lib/prompt-segments'
import { z } from 'zod'

export const validator = z.object({
  data: z.string().min(100),
})

function getPromptCN(topic: string, count: number = 500): string {
  return `
请写一个段落，大概 ${count} 字左右。
根据话题不同，介绍话题的:

- 概念, 定义, 范围，科学解释。从而让读者对这个话题有更明确的理解。
- 如果是主观体验，进行体验描述。

无需书写总结的部分，例如：“综合而言”，“总之”,“总体而言”， 我会自行添加。

${promptRequirements.content()}

这次的话题是关于：

"""
${topic}
"""

${promptRequirements.outputFormat()}

{
  "data": "" 
}

`
}

function getPromptEN(topic: string, count: number = 500): string {
  return `
Please write a paragraph of approximately ${count} words.

Depending on the topic, introduce the concept or definition or experience description, scope, or scientific explanation of the topic. This gives readers a clearer understanding of the topic.

There is no need to write a summary part, such as: "In summary", "In summary", "Overall", I will add it myself.

This time the topic is about:

"""
${topic}
"""

${promptRequirements.outputFormat()}

{
  "data": "" 
}

`
}

function getPrompt(topic: string, count: number = 500, lang = 'cn'): string {
  if (lang == 'cn') {
    return getPromptCN(topic, count)
  } else {
    return getPromptEN(topic, count)
  }
}

export async function generateScriptDefinition(
  topic: string,
  count: number = 500,
) {
  const prompt = getPrompt(topic, count)
  let result = await askGptWithCache({ prompt, validator })
  return result.data
}
