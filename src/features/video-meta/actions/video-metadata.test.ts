import { generateVideoDescription } from './video-description'
import { generateVideoTags } from './video-tags'
import { generateVideoTitles } from './video-titles'

// Test case 1: Testing with a valid topic and count
test('gen video metadata test', async () => {
  // const topic = '羅茲威爾飛碟墜毀事件 Roswell UFO incident'
  // const topic = '地球是扁平的: 尽管科学已经证明地球是一个椭圆形，但一些人坚信地球是平的，而地球的圆球形状是一个欺骗'
  // const topic = '新世界秩序（英語：New World Order，有時寫作NWO）是一項關於極權主義世界政府的陰謀論'
  const topic = `科技新书： Something Deeply Hidden 
  Quantum Worlds and the Emergence of Spacetime
  的中文翻译是《深度隐藏的东西：量子世界与时空的涌现》。`
  const titles = await generateVideoTitles(topic)
  const keywords = await generateVideoTags(topic)
  const description = await generateVideoDescription(topic)

  const metadata = `title: \n${titles.join(
    '\n',
  )}\n\n\nkeywords: \n${keywords}\n\n\ndescription: \n${description}`
  console.log('metadata: \n\n' + metadata)

  expect(metadata.length).toBeGreaterThan(30)
})
