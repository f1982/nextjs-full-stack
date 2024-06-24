import { generateContributor } from './script-refs'

test('test contributor generation', async () => {
  const topic = '蝴蝶效应'

  const content = await generateContributor(topic)
  expect(Array.isArray(content)).toBeTruthy()
  console.log('content', JSON.stringify(content))

  expect(content?.length).toBeGreaterThan(2)
})
