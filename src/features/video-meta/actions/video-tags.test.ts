import { generateVideoTags } from './video-tags'
import { expect, test } from 'vitest'

test('should return a string of tags', async () => {
  const topic = '暗物质'
  const tags = await generateVideoTags(topic, 5)
  console.log('tags: \n', tags)

  expect(typeof tags).toBe('string')
  expect(tags?.includes(',')).toBe(true)

  expect(tags?.split(', ').length).toBeGreaterThan(6)
})

test('test English video tags', async () => {
  const topic = 'dark matter'
  const tags = await generateVideoTags(topic, 5, 'en')
  console.log('tags: \n', tags)

  expect(typeof tags).toBe('string')
  expect(tags?.includes(',')).toBe(true)

  expect(tags?.split(', ').length).toBeGreaterThan(6)
})
