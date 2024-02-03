import { retrieveVideos } from '../../video/_lib/video-actions'
import { retrieveChannel } from '../_lib/channel-actions'
import { Button } from '@/app/_modules/components/ui/button'
import { Separator } from '@/app/_modules/components/ui/separator'
import { Video } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

export default async function Page({
  params
}: {
  params: { channelId: string }
}) {
  const channelInf = await retrieveChannel(params.channelId)

  const { status, data: videos } = await retrieveVideos(params.channelId)
  return (
    <div className="container">
      <div>
        <span>Video detail Page : {params.channelId}</span>
        <p>name: {channelInf.data?.channel_name}</p>
      </div>

      <Separator></Separator>
      <div className="flex flex-row gap-3">
        <Link href={params.channelId + '/video-new'}>
          <Button variant={'link'}>New Video</Button>
        </Link>
        <Link href={`${params.channelId}/settings`}>
          <Button variant={'link'}>Edit Channel Info</Button>
        </Link>
        {/* <DelButton actionHandler={onDelete} itemId={channel.id} /> */}
      </div>
      <h2>video list</h2>
      <div>
        {videos?.map((item: Video) => {
          return (
            <div key={item.id}>
              <h1>{item.topic}</h1>
              <Link
                href={'/dashboard/channel/' + item.channel_id + '/' + item.id}>
                {' '}
                Edit it
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
