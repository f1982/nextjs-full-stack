'use server'

import { auth } from '@/config/auth-settings'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

type FormResponseState = {
  status: 'success' | 'failure'
  message?: string
  error?: string | null
}

export async function createPost(
  prevState: FormResponseState,
  formData: FormData
): Promise<FormResponseState> {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
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
    return { status: 'failure', error: 'failure to create todo' }
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
    return {
      status: 'success',
      error: null,
      message: `Added data successfully`
    }
  } catch (e) {
    return { status: 'failure', message: 'failure to create data' }
  }
}
