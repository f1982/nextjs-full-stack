'use server'

import { cache } from '@/lib/file-cache'

export async function setCache(key: string, value: string) {
  await cache.set(key, value)
}

export async function getCache(key: string) {
  return await cache.get(key)
}

export async function getVideoScript(id: string) {
  let script = ''
  script += (await cache.get('script-hook-' + id)) || ''
  script += '\n\n'
  script += (await cache.get('script-quote-' + id)) || ''
  script += '\n\n'
  script += (await cache.get('script-main-' + id)) || ''
  script += '\n\n'
  script += (await cache.get('script-ending-' + id)) || ''
  script += '\n\n'
  return script
}
