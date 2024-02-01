import NewChannelForm from './_lib/add-form'
import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
import { Separator } from '@/app/_modules/components/ui/separator'
import { revalidatePath } from 'next/cache'

const handleChannelCreation = async (data: any) => {
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

export default function Page() {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Create new channel</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator className="mb-6" />
      <NewChannelForm
        handleSubmit={handleChannelCreation}
        redirectUrl="/dashboard/channel"
      />
    </>
  )
}
