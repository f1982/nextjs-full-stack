import Cache from 'file-system-cache'

export const cache = Cache({
  // basePath: '/.cache', // (optional) Path where cache files are stored (default).
  // ns: 'gen-cache', // (optional) A grouping namespace for items.
  hash: 'sha1', // (optional) A hashing algorithm used within the cache key.
  ttl: 60 * 60 * 24 * 30, // 1 month
})
