import { generateScriptQuotes } from './script-quotes'
import { expect, test } from 'vitest'

test('test quotes', async () => {
  const topic = '暗物质'
  const hook = await generateScriptQuotes(topic)

  expect(Array.isArray(hook)).toBeTruthy()

  expect(hook?.length).toBeGreaterThan(3)
})
