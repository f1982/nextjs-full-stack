export const getDateTime = () => {
  const d = new Date()
  return d.toDateString() + ' - ' + d.toLocaleTimeString()
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const LanguageDetect = require('languagedetect')
const lngDetector = new LanguageDetect()

// This is not very accurate counting method
export function countWords(str: string): number {
  if (lngDetector.detect(str) === 'en') {
    let words = str.match(/\S+/g)
    if (words && words?.length !== 0) {
      return words.length
    } else {
      return 0
    }
  } else {
    // Remove all the non Chinese characters
    return str.replace(/[^\u4e00-\u9fa5\w\s]*/g, '').length
  }
}
