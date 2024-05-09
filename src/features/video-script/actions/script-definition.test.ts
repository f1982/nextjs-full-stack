import { generateScriptDefinition } from './script-definition'
import { countWords } from '@/utils/utils'

test('test definition generation by english', async () => {
  const topic = 'NDE; near-death experience'
  const content = await generateScriptDefinition(topic, 500)
  console.log('content', content)

  expect(typeof content).toBe('string')

  expect(countWords(content)).toBeGreaterThan(20)
  expect(content?.length).toBeGreaterThan(100)
  console.log('countWords: ', countWords(content))
})

test('test definition generation by chinese', async () => {
  const topic = '費米悖論（英語：Fermi paradox），又稱費米謬論'
  const content = await generateScriptDefinition(topic, 500)
  console.log('content', content)

  expect(typeof content).toBe('string')

  expect(countWords(content)).toBeGreaterThan(20)
  expect(content?.length).toBeGreaterThan(100)
  console.log('countWords: ', countWords(content))
})
