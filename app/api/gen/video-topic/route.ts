import { auth } from '@/app/_lib/auth-opt'
import { sleep } from '@/app/_lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<any> {
  // console.log('request', request)
  const session = await auth()
  console.log('session', session)
  if (!session) {
    return Response.json({
      message: 'You must be logged in.',
      status: 'failure',
      data: null
    })
  }

  await sleep(3000)

  const result = Response.json({ status: 'success', data: ['test', 'haha'] })
  console.log('result', result)
  return result
}
