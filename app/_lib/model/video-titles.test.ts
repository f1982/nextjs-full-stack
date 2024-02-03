// Import the necessary modules and functions for testing
import { generateVideoTitles } from './video-titles'
import { expect, test } from 'vitest'

// Test case 1: Testing with a valid topic and count
test('test video title zh', async () => {
  const topic = '黑洞'
  const count = 5
  const result = await generateVideoTitles(topic, count)
  console.log('result', result)
  expect(result.length).toBeGreaterThan(3)
  // expect(result).toEqual(expect.arrayContaining([expect.any(String)]))
})

test('test video titles en', async () => {
  const topic = 'parallel universe'
  const count = 5
  const result = await generateVideoTitles(topic, count, 'en')
  console.log('result', result)
  expect(result.length).toBeGreaterThan(3)
})
