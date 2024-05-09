import { generateDerivatives } from './script-derivatives'

test('test concept extend', async () => {
  // const concept = '引力波'
  const concept = '蝴蝶效应'
  const events = await generateDerivatives(concept)

  expect(Array.isArray(events)).toBeTruthy()

  expect(events.length).toBeGreaterThan(3)
})
