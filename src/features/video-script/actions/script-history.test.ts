import { generateScriptHistory } from './script-history'

// test('test concept extend', async () => {
//   // const concept = '引力波'
//   // const concept = '瀕死體驗'
//   const concept = '費米悖論（英語：Fermi paradox），又稱費米謬論'
//   const events = await generateScriptHistory(concept)

//   expect(Array.isArray(events)).toBeTruthy()

//   expect(events.length).toBeGreaterThan(3)
// })

test('test concept extend 2', async () => {
  // const concept = '引力波'
  // const concept = '瀕死體驗'
  // const concept = '費米悖論（英語：Fermi paradox），又稱費米謬論'
  const concept = '黑暗森林法制'
  const events = await generateScriptHistory(concept)
  console.log('events', events)

  expect(Array.isArray(events)).toBeTruthy()

  expect(events.length).toBeGreaterThan(3)
})
