import { retrieveChannel } from '../../_lib/channel-actions'
import { Button } from '@/app/_modules/components/ui/button'
import { retrieveVideos } from '@/app/dashboard/video/_lib/video-actions'
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
    <>
      <div>Channel ID: {params.channelId}</div>
      <div>
        <Link href={'/dashboard/video/test-video-id'}>A vidoe </Link>
      </div>

      <div>
        {videos?.map((vid: Video) => {
          return (
            <div className="prose prose-lg" key={vid.id}>
              <Link href={'/dashboard/video/' + vid.id}>
                <h3>{vid.topic}</h3>
                <Button variant={'secondary'}>Edit it</Button>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
