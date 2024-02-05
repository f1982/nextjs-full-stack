import { generatePostUpdate } from './post-updates'
import { expect, test } from 'vitest'

test('test gen post update', async () => {
  const topic = '暗物质'
  const hook = await generatePostUpdate(topic)

  expect(Array.isArray(hook)).toBeTruthy()

  expect(hook?.length).toBeGreaterThan(3)
})
