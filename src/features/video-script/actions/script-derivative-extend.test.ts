import { generateDerivativeExtend } from './script-derivative-extend'
import { countWords } from '@/utils/utils'

test('test derivative content extend', async () => {
  // const concept =
  // '2017, LIGO再次觀測到引力波: 2017年，LIGO再次成功觀測到來自黑洞合併的引力波，證實了引力波的存在並開啟了引力波天文學的新篇章。'

  const concept =
    '時間旅行者的妻子, 2003年出版的小說，描述了一位時間旅行者與他妻子之間的愛情故事，展現了時間旅行對人生命運的影響。作者：奧德莉·尼芬格'

  const text = await generateDerivativeExtend(concept, 500, 'zh')
  console.log('text count: ', countWords(text))

  expect(typeof text).toBe('string')

  expect(text.length).toBeGreaterThan(100)
})

test('test derivative content extend by en', async () => {
  // const concept =
  // '2017, LIGO再次觀測到引力波: 2017年，LIGO再次成功觀測到來自黑洞合併的引力波，證實了引力波的存在並開啟了引力波天文學的新篇章。'

  const concept = `The Time Traveler's Wife," a novel published in 2003, depicting a love story between a time traveler and his wife`

  const text = await generateDerivativeExtend(concept, 500, 'en')
  console.log('text count: ', countWords(text))

  expect(typeof text).toBe('string')

  expect(text.length).toBeGreaterThan(100)
})

// test('test content extend with generation', async () => {
//   const concept = '蝴蝶效应'
//   const events = await generateDerivatives(concept)

//   const rnd = randomInt(0, events.length)
//   const content =
//     events[rnd].work +
//     '\n' +
//     events[rnd].summary +
//     '\n' +
//     events[rnd].year +
//     '\n' +
//     events[rnd].author

//   console.log('content', content)

//   const text = await generateDerivativeExtend(content, 500)
//   expect(typeof text).toBe('string')
//   expect(text.length).toBeGreaterThan(100)
// })
