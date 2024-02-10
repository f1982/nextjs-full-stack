import { askGptWithCache } from '../gpt'
import { promptRequirements } from './prompt-segments'

export function getPrompt(
  content: string,
  topic: string,
  count: number = 500,
): string {
  let prompt =
    '请提供以下事件发生时的更多细节 （具體時間，地點，關鍵人物名字，物品的細節）和事件详细过程（衝突，重要的階段，不尋常的細節）。' +
    '\n'
  prompt += `让初中学生可以读懂。` + '\n'
  prompt += `請寫出 ${count} 個字文章。` + '\n'
  // prompt += '段落之間請用 “---” 來分割。' + '\n'
  prompt += promptRequirements.noRepeatTopic(topic) + '\n'
  prompt += `
需要擴展的內容：

"""
${content}
""" 
`

  return prompt
}

export async function generateExtend(
  content: string,
  topic: string,
  count: number = 500,
) {
  const prompt = getPrompt(content, topic, count)
  console.log('prompt', prompt)
  let result = await askGptWithCache({ prompt, jsonFormat: false })
  return result
}
