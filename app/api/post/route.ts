// "use server";
import { auth } from '../../_lib/auth-opt'
import prisma from '../../_lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { title, content } = await req.json()

  const session = await auth()
  if (!session) {
    return NextResponse.json({
      message: 'You must be logged in.',
      status: 401
    })
  }

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email || '' } }
    }
  })
  return NextResponse.json(result)
}
