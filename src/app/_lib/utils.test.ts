import { getDateTime } from './utils'
import { expect, test } from 'vitest'

test('should show the date time string', () => {
  const dt = getDateTime()
  expect(typeof dt).toBe('string')
})
