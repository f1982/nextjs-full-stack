import { generateVideoDescription } from './video-description'
import { expect, test } from 'vitest'

// Test case 1: Testing with a valid topic and count
test('gen video desc test', async () => {
  const topic = '黑洞里面到底有什么'
  const text = await generateVideoDescription(topic)
  console.log('text: \n', text)
  expect(text.length).toBeGreaterThan(30)
})

test('gen video desc test 2', async () => {
  const topic = '探索平行世界的存在证据'
  const text = await generateVideoDescription(topic)
  console.log('text: \n', text)
  expect(text.length).greaterThan(30)
})
