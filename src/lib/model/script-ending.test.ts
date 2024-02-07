import { countWords } from '../utils'
import { generateScriptEnding } from './script-ending'
import { expect, test } from 'vitest'

test('should return a string of hook', async () => {
  const topic = '引力波'
  // const topic = '瀕死體驗'
  const channel = '無責任猜想'
  const content = await generateScriptEnding(topic, channel)
  console.log('content', content)
  console.log('words count:', countWords(content))

  expect(typeof content).toBe('string')

  expect(content?.length).toBeGreaterThan(50)
})
