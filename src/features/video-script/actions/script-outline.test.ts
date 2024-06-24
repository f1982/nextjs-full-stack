import { countWords } from '../../../utils/utils'
import { generateScriptOutline } from './script-outline'
import { expect, test } from 'vitest'

test('test concept extend', async () => {
  // const concept = '引力波'
  const concept = 'Roswell incident (羅斯威爾飛碟墜毀事件)'
  // const concept = '图灵悖论： 计算机是否能够判断一个程序是否会停止运行？'

  const content = await generateScriptOutline(concept)
  console.log('content: \n', content)
  console.log('words count: ', countWords(content))

  expect(content.length).toBeGreaterThan(3)
})
