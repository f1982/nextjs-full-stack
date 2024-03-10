import { APIResponse, ResponseStatus } from '../types/types'
import { sleep } from './utils'

export async function mockServerResponse(
  s: ResponseStatus = 'failure',
  t: number = 3000,
): Promise<APIResponse<null>> {
  await sleep(t)
  return { status: s, message: 'You need to log in first', data: null }
}
