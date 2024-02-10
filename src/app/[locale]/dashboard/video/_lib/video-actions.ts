import { auth } from '@/lib/auth-opt'
import { mockServerResponse } from '@/lib/debug-only'
import prisma from '@/lib/prisma'
import { APIResponse } from '@/lib/types/types'
import { Video } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const retrieveVideos = async (
  channelId: string
): Promise<APIResponse<Video[]>> => {
  const session = await auth()
  if (!session) {
    return {
      status: 'failure',
      message: 'You need to log in first'
    }
  }

  try {
    const list = await prisma.video.findMany({
      where: {
        channel_id: channelId,
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

export const createVideoWithTopic = async (
  data: Partial<Video>
): Promise<APIResponse<null>> => {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }
  // console.log('data', data)
  // return {
  //   status: 'success',
  //   message: `Added  successfully`
  // }

  try {
    await prisma.video.create({
      data: {
        topic: data.topic!,
        channel: { connect: { id: data.channel_id } },
        user: { connect: { email: session?.user?.email! } }
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

export const updateVideo = async (
  data: Partial<Video>
): Promise<APIResponse<any>> => {
  // test mock error message
  // console.log('update video data:', data)
  // return mockServerResponse('success')
  // console.log('data', data)

  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }
  if (!data.id) {
    return { status: 'failure', message: 'No id provided' }
  }
  const { id: _, updated_at: _1, created_at: _2, ...rest } = data
  try {
    const updatedData = await prisma.video.update({
      where: { id: data.id },
      data: rest
    })
    revalidatePath('/')
    return {
      status: 'success',
      message: `Operation successfully`,
      data: updatedData
    }
  } catch (e) {
    return { status: 'failure', message: 'Operation failed,' + e?.message }
  }
}

export async function retrieveVideo(id: string): Promise<APIResponse<Video>> {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }

  try {
    const data = await prisma.video.findFirst({
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
