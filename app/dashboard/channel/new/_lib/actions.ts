'use server'

import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
import { revalidatePath } from 'next/cache'

export const handleChannelCreation = async (data: any) => {
  'use server'
  console.log('handleSubmit', data)
  const session = await auth()
  console.log('session', session)
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }
  // await sleep(5000)
  // return {}

  try {
    await prisma.channel.create({
      data: {
        channel_name: data.channel_name,
        description: data.description,
        keyword: data.keyword,
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

export async function handleChannelDel(id: string) {
  'use server'
  console.log('deleteChannel is called...')
  const session = await auth()
  console.log('session', session)
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }
  // await sleep(5000)
  // return {}

  try {
    await prisma.channel.delete({
      where: {
        id
      }
    })

    revalidatePath('/')
    return {
      status: 'success',
      error: null,
      message: `delete  successfully`
    }
  } catch (e) {
    return { status: 'failure', message: 'failure to create ' }
  }
}
