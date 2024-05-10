import { generateTechScript } from './script-timeline-style'
import { countWords } from '@/utils/utils'

test('test all scripts by timeline', async () => {
  const channel = '無責任猜想'
  // const topic = '恆星演化是恆星隨着時間的推移而變化的過程。'
  // const topic = '費米悖論（英語：Fermi paradox），又稱費米謬論'
  // const topic = '原初黑洞（primordial black holes (PBHs) ），又稱為太初黑洞'
  // const topic = '超新星 Supernova'
  // const topic = '亞特蘭提斯帝國 Atlantis '
  // const topic = '蘇美爾文明和傳說'
  // const topic =
  // '地球是平的悖论： 为什么一些人坚持认为地球是平的，尽管有大量科学证据证明了地球的球形？'
  // const topic = '羅茲威爾飛碟墜毀事件 Roswell UFO incident'
  // const topic = '費米悖論（英語：Fermi paradox），又稱費米謬論t'
  const topic = '宇宙中已知的最大的黑洞是人马座A*（Sagittarius A*）。'
  // const topic = '空间电梯 Space elevator'
  // const topic =
  //   '心灵-身体悖论（Mind-Body Problem）： 思想和意识是如何与身体和大脑的物质过程相互关联的问题。'

  const content = await generateTechScript(channel, topic)
  expect(typeof content).toBe('string')
  console.log('Content: \n', content)

  const wordsCount = countWords(content)
  console.log('Words count: ', wordsCount)
  expect(wordsCount).toBeGreaterThan(1000)
})
