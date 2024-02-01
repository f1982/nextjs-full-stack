export const getDateTime = () => {
  const d = new Date()
  return d.toDateString() + ' - ' + d.toLocaleTimeString()
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
