import { countWords } from '../utils'
import { generateExtend } from './script-extend'
import { expect, test } from 'vitest'

test('test historical event extend', async () => {
  const topic = '引力波'
  const brief =
    '2017, LIGO再次觀測到引力波: 2017年，LIGO再次成功觀測到來自黑洞合併的引力波，證實了引力波的存在並開啟了引力波天文學的新篇章。'

  // const topic = '凱克斯堡飛碟墜毀事件 Kecksburg UFO incident'
  // const brief = `探索歷史和演變,  1965年凱克斯堡飛碟墜毀事件的發生事件後續的演變和相關調查`

  const text = await generateExtend(brief, topic, 500)
  console.log('text', text)
  console.log('text count: ', countWords(text))

  expect(typeof text).toBe('string')

  expect(text.length).toBeGreaterThan(200)
})

test('test concept extend', async () => {
  const topic = '蝴蝶效应'
  const brief =
    '确定性混沌 - 描述混沌系统的行为，虽然系统的规律性由确定性方程描述，但系统行为却表现出随机和不可预测的特性。'
  const text = await generateExtend(brief, topic, 800)

  expect(typeof text).toBe('string')

  expect(text.length).toBeGreaterThan(200)
})

test('test derivative extend', async () => {
  const topic = '時間旅行'
  const brief =
    '時間旅行者的妻子, 2003年出版的小說，描述了一位時間旅行者與他妻子之間的愛情故事，展現了時間旅行對人生命運的影響。作者：奧德莉·尼芬格'

  const text = await generateExtend(brief, topic, 800)

  expect(typeof text).toBe('string')
  expect(text.length).toBeGreaterThan(200)

  console.log('text', text)
  console.log('text count: ', countWords(text))
})
