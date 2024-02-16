import NewVideoButton from '../../../_lib/new-video-button'
import { retrieveChannel } from '../../_lib/channel-actions'
import { retrieveVideos } from '@/app/[locale]/dashboard/video/_lib/video-actions'
import { Button } from '@/components/ui/button'
import { Video } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

export default async function Page({
  params,
}: {
  params: { channelId: string }
}) {
  const channelInf = await retrieveChannel(params.channelId)

  const { status, data: videos } = await retrieveVideos(params.channelId)

  return (
    <>
      <div>Channel ID: {params.channelId}</div>
      <div>
        <NewVideoButton channelId={params.channelId}></NewVideoButton>
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
