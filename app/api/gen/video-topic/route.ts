import { auth } from '@/app/_lib/auth-opt'
import { generateVideoTitles } from '@/app/_lib/model/video-titles'
import { sleep } from '@/app/_lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<any> {
  // console.log('request', request)
  const session = await auth()
  console.log('session', session)
  if (!session) {
    return NextResponse.json({
      message: 'You must be logged in.',
      status: 'failure',
      data: null
    })
  }

  await sleep(3000) //TODO: remove this
  const titleList = await generateVideoTitles('黑洞内部', 5)

  const result = NextResponse.json({ status: 'success', data: titleList })
  console.log('result', result)
  return result
}
