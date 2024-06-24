'use client'

import DelButton from './del-button'
import { Channel } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export default function ChannelItem({
  channel,
  children,
}: {
  channel: Channel
  children?: React.ReactNode
}) {
  return (
    <div
      key={channel.id}
      className="flex max-w-[288px] flex-col items-center gap-4 rounded-md border border-solid border-[#cdcdcd] px-6 py-6 md:max-w-full md:items-start">
      <Link href={`/dashboard/channel/${channel.id}`}>
        <Image
          width={100}
          height={100}
          src="https://i.pravatar.cc/300"
          alt=""
          className="lg:h-42 mb-4 inline-block h-56 w-full object-cover max-[479px]:max-w-[208px]"
        />
        <div className="prose prose-xl">
          <h5>{channel.channel_name}</h5>
          <p className="text-sm text-[#636262]">{channel.description}</p>
        </div>
      </Link>
      <div className="flex w-full flex-row justify-between gap-3 text-sm">
        {children}
      </div>
    </div>
  )
}
