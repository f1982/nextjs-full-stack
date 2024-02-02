import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
import { APIResponse } from '@/app/_lib/types/types'
import { Channel, Video } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const createVideoWithTopic = async (
  data: Partial<Video>
): Promise<APIResponse<null>> => {
  const session = await auth()
  if (!session) {
    return { status: 'failure', message: 'You need to log in first' }
  }

  try {
    await prisma.video.create({
      data: {
        topic: data.topic!,
        channel_id: data.channel_id!,
        // user_id: session?.user?.id,
        user: { connect: { email: session?.user?.email || '' } }
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
