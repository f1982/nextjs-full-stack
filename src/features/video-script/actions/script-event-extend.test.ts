import { generateEventExtend } from './script-event-extend'
import { countWords } from '@/utils/utils'

// test('test historical event extend', async () => {
//   const brief =
//     '1960s-1975, 濒死体验的早期研究: 20世纪60年代，美国心理学家雷蒙德·穆迪（Raymond Moody）开始研究濒死体验，并在1975年出版了《濒死体验》一书。'

//   const concept = '濒死体验'
//   const text = await generateEventExtend(brief, concept, 500)
//   console.log('text', text)
//   console.log('words count:', countWords(text))

//   expect(typeof text).toBe('string')

//   expect(text.length).toBeGreaterThan(300)
// })

test('test historical event extend 2', async () => {
  //   const brief = `
  // 黑暗森林法制概念提出: 學者們透過深入研究黑暗森林理論，開始提出了將其應用於法制和國際關係的概念，認為國與國之間就像黑暗森林中的文明一樣，需要保持警惕和警戒。2015
  // `
  const brief = ` 
  黑暗森林法制的爭議
  一些學者和政治家開始對黑暗森林法制提出質疑，認為過度的懷疑和警戒可能會導致國與國之間的對立和衝突。
  2020
`
  // const brief = `21世纪中期, 热核聚变技术的商业化应用: 随着技术的不断进步，热核聚变技术有望在未来实现商业化应用，成为清洁能源的重要来源。`

  const concept = '黑暗森林法制'
  const text = await generateEventExtend(brief, concept, 500)
  console.log('text', text)
  console.log('words count: ', countWords(text))

  expect(typeof text).toBe('string')

  expect(text.length).toBeGreaterThan(300)
})
