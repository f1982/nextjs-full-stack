export type ResponseStatus = 'failure' | 'success'

export type APIResponse<T> = {
  status: ResponseStatus
  message?: string
  data?: T | null
}

export type WithCN = {
  className?: string
}
