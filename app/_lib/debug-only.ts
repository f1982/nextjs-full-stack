import { APIResponse, ResponseStatus } from './types/types'

function mockServerResponse(s: ResponseStatus = 'failure'): APIResponse<any> {
  return { status: s, message: 'You need to log in first' }
}
