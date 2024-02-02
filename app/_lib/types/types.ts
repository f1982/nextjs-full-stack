export type APIResponse<T> = {
  status: 'success' | 'failure'
  message: string
  data?: T | null
}
