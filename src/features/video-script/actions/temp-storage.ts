'use server'

import { cache } from '@/lib/file-cache'

export async function setCache(key: string, value: string) {
  await cache.set(key, value)
}

export async function getCache(key: string) {
  return await cache.get(key)
}
