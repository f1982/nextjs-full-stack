import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'
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
  const channels = await getData()
  return (
    <div className="container">
      <div>Channel List</div>
      <Link href="/dashboard/channel/new">Create New Channel</Link>

      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Our Team Members
          </h2>
          <p className="mx-auto mb-8 mt-4 text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          <div className="mx-auto grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {channels?.map((channel) => (
              <div
                key={channel.id}
                className="flex max-w-[288px] flex-col items-center gap-4 rounded-md border border-solid border-[#cdcdcd] px-6 py-6 md:max-w-full md:items-start">
                <Image
                  width={100}
                  height={100}
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg"
                  alt=""
                  className="max-[479px]:max-w-[208px] mb-4 inline-block h-56 w-full object-cover lg:h-42"
                />
                <p className="font-bold"> {channel.channel_name}</p>
                <p className="text-sm text-[#636262]">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
