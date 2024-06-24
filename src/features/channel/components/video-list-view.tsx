import { Video } from '@prisma/client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { retrieveVideos } from '@/features/video-meta/actions/video-actions'
import NewVideoButton from '@/features/video-meta/components/new-video-button'

export default async function VideoListView({
  channelId,
}: {
  channelId: string
}) {
  const { status, data: videos } = await retrieveVideos(channelId)

  return (
    <>
      <div>
        <NewVideoButton channelId={channelId}></NewVideoButton>
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
