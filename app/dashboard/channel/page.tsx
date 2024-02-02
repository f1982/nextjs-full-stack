import { deleteChannel, retrieveChannels } from './_lib/channel-actions'
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
      <section>
        <div className="flex flex-col items-center gap-9">
          <h2 className="text-3xl font-bold md:text-5xl">Your Channel List</h2>
          <p className="dtext-sm text-[#636262] sm:text-base">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          <Link href="/dashboard/channel/new">
            <Button>Create New Channel</Button>
          </Link>
          <div className="mx-auto grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {channels?.map((channel) => (
              <div
                key={channel.id}
                className="flex max-w-[288px] flex-col items-center gap-4 rounded-md border border-solid border-[#cdcdcd] px-6 py-6 md:max-w-full md:items-start">
                <Image
                  width={100}
                  height={100}
                  src="https://i.pravatar.cc/300
"
                  alt=""
                  className="max-[479px]:max-w-[208px] mb-4 inline-block h-56 w-full object-cover lg:h-42"
                />
                <p className="font-bold"> {channel.channel_name}</p>
                <p className="text-sm text-[#636262]">{channel.description}</p>
                <DelButton actionHandler={deleteChannel} itemId={channel.id} />
                <Link href={`/dashboard/channel/edit/${channel.id}`}>Edit</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
