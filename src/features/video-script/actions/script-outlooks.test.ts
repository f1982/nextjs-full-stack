import { generateOutlooks } from './script-outlook'

test('test concept extend', async () => {
  // const concept = '引力波'
  // const concept = '蝴蝶效应'
  const concept = '磁场與时空扭曲的關係'
  const content = await generateOutlooks(concept)
  console.log('content: \n', content)

  expect(content.length).toBeGreaterThan(3)
})
