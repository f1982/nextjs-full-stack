import { auth } from '../../../lib/auth-opt'
import prisma from '../../../lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) {
    return NextResponse.json({ message: 'No post id provided.' })
  }

  const session = await auth()
  if (!session) {
    return NextResponse.json({
      message: 'You must be logged in.',
      status: 401
    })
  }

  const post = await prisma.post.update({
    where: { id },
    data: { published: true }
  })
  return NextResponse.json(post)
}
