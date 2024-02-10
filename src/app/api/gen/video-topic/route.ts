import { auth } from '@/config/auth-settings'
import { generateVideoTitles } from '@/lib/model/video-titles'
import { sleep } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<any> {
  const session = await auth()
  if (!session) {
    return NextResponse.json({
      message: 'You must be logged in.',
      status: 'failure',
      data: null
    })
  }

  await sleep(3000) //TODO: remove this
  const titleList = await generateVideoTitles('黑洞内部', 5)

  return NextResponse.json({ status: 'success', data: titleList })
}
