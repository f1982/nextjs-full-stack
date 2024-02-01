'use server'

import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
import { revalidatePath } from 'next/cache'

type FormResponseState = {
  status: 'success' | 'failure'
  message?: string
  error?: string | null
}

export async function createChannel(
  prevState: FormResponseState,
  formData: FormData
): Promise<FormResponseState> {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }

  // const schema = z.object({
  //   title: z.string().min(1),
  //   content: z.string().min(1)
  // })

  // const parse = schema.safeParse({
  //   title: formData.get('title'),
  //   content: formData.get('content')
  // })

  // if (!parse.success) {
  //   return { status: 'failure', error: 'failure to create todo' }
  // }

  // const data = parse.data
  try {
    await prisma.channel.create({
      data: {
        channel_name: formData.get('channel_name') as string,
        description: formData.get('description') as string,
        keyword: formData.get('keyword') as string,
        user: { connect: { email: session?.user?.email || '' } }
      }
    })

    revalidatePath('/')
    return {
      status: 'success',
      error: null,
      message: `Added  successfully`
    }
  } catch (e) {
    return { status: 'failure', message: 'failure to create ' }
  }
}
