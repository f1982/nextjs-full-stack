import Cache from 'file-system-cache'

// TO make the cache work in vercel env
// https://stackoverflow.com/questions/53765403/how-to-access-tmp-folder-in-lambda-with-in-node/53770877#53770877
export const cache = Cache({
  basePath: process.env.NODE_ENV === 'production' ? '/tmp' : './.cache', // (optional) Path where cache files are stored (default).
  // ns: 'gen-cache', // (optional) A grouping namespace for items.
  hash: 'sha1', // (optional) A hashing algorithm used within the cache key.
  ttl: 60 * 60 * 24 * 30, // 1 month
})
