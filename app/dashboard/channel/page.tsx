import { deleteChannel, retrieveChannels } from './_lib/channel-actions'
import ChannelItem from './_lib/channel-item'
import DelButton from './_lib/del-button'
import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
import ServerError from '@/app/_modules/components/server/server-error'
import { Button } from '@/app/_modules/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getData = async (): Promise<any[] | null> => {
  const session = await auth()
  if (!session) {
    return null
  }

  return await prisma.channel.findMany({
    where: {
      user: { email: session?.user?.email }
    },
    include: {
      user: {
        select: { name: true, email: true }
      }
    }
  })
}

export default async function Page() {
  const response = await retrieveChannels()

  if (response.status === 'failure') {
    return <ServerError message={response.message} />
  }
  const { data: channels } = response

  return (
    <div className="container">
      <section className="prose prose-xl text-center mb-12">
        <h3>Your Channel List</h3>
        <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
        <Link href="/dashboard/channel/new">
          <Button>Create New Channel</Button>
        </Link>
      </section>
      <section>
        <div className="mx-auto grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {channels?.map((channel) => (
            <ChannelItem
              key={channel.id}
              channel={channel}
              onDelete={deleteChannel}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
