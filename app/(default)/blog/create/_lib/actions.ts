'use server'

import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export async function createPost(
  prevState: {
    message: string
    error: string | null
  },
  formData: FormData
) {
  //test
  // return Promise.resolve({ error: 'You need to log in first' })
  // return { error: 'You need to log in first' }
  //test end
  const session = await auth()
  console.log('session', session)
  if (!session) {
    return { error: 'You need to log in first' }
  }

  const schema = z.object({
    title: z.string().min(1),
    content: z.string().min(1)
  })
  const parse = schema.safeParse({
    title: formData.get('title'),
    content: formData.get('content')
  })

  if (!parse.success) {
    return { error: 'Failed to create todo' }
  }

  const data = parse.data

  try {
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        author: { connect: { email: session?.user?.email || '' } }
      }
    })

    revalidatePath('/')
    return { error: null, message: `Added data successfully` }
  } catch (e) {
    return { error: 'Failed to create data' }
  }
}
