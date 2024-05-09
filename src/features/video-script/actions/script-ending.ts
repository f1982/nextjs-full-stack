import { askGptWithCache } from '../../../lib/gpt'

function getPrompt(topic: string, channel: string = '無責任猜想'): string {
  return `
視頻的結束，讓用戶針對 “${topic}” 話題提出自己的獨特見解。
簡單提示用戶對 YouTube 視頻頻道 ${channel} 進行 訂閱，分享，留言或者內容建議等 CTA 操作。 
增加用戶的互動概率。
`
}

export async function generateScriptEnding(topic: string, channel: string) {
  const prompt = getPrompt(topic, channel)
  const result = await askGptWithCache({ prompt, jsonFormat: false })
  return result
}
