'use server'

import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
import { APIResponse } from '@/app/_lib/types/types'
import { Channel } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const retrieveChannels = async (): Promise<APIResponse<Channel[]>> => {
  const session = await auth()
  if (!session) {
    return {
      status: 'failure',
      message: 'You need to log in first'
    }
  }

  try {
    const list = await prisma.channel.findMany({
      where: {
        user: { email: session?.user?.email }
      },
      include: {
        user: {
          select: { name: true, email: true }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    })
    return { status: 'success', message: 'get  successfully', data: list }
  } catch (e) {
    return { status: 'failure', message: 'failure to create ' }
  }
}

export async function retrieveChannel(
  id: string
): Promise<APIResponse<Channel>> {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }

  try {
    const data = await prisma.channel.findFirst({
      where: {
        id
      }
    })
    return {
      status: 'success',
      message: `get  successfully`,
      data
    }
  } catch (e) {
    return { status: 'failure', message: 'failure to create ' }
  }
}

export const createChannel = async (data: Partial<Channel>) => {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }

  try {
    await prisma.channel.create({
      data: {
        channel_name: data.channel_name!,
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

export const updateChannel = async (
  data: Partial<Channel>
): Promise<APIResponse<any>> => {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }

  try {
    await prisma.channel.update({
      where: { id: data.id },
      data: {
        channel_name: data.channel_name,
        description: data.description,
        keyword: data.keyword
      }
    })

    revalidatePath('/')
    return {
      status: 'success',
      message: `Added  successfully`
    }
  } catch (e) {
    return { status: 'failure', message: 'failure to create ' }
  }
}

export async function deleteChannel(id: string) {
  'use server'
  const session = await auth()
  console.log('session', session)
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }

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
