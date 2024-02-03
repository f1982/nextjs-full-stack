import { ServerError } from '@/app/_modules/components/molecule/server-error'
import { Button } from '@/app/_modules/components/ui/button'
import { Separator } from '@/app/_modules/components/ui/separator'
import TopicSelect from '@/app/dashboard/video/_lib/topic-select'
import {
  createVideoWithTopic,
  retrieveVideo,
  updateVideo
} from '@/app/dashboard/video/_lib/video-actions'
import Link from 'next/link'

export default async function Page({
  params
}: {
  params: { channelId: string; videoId: string }
}) {
  const handleSubmit = async (data: any) => {
    'use server'

    // Update existing video
    if (!params.videoId) {
      const updatedData = Object.assign(data, {
        channel_id: params.channelId
      })
      return await createVideoWithTopic(updatedData)
    }

    // Create new video
    const updatedData = { ...data, id: params.videoId }
    return await updateVideo(updatedData)
  }

  const { status, data: videoData } = await retrieveVideo(params.videoId)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }

  return (
    <>
      <div className="prose prose-md">
        {params.videoId ? <h2>Edit video</h2> : <h2>Create new video</h2>}
        <p>Start a new video by adding a topic.</p>
      </div>

      <Link href={'/dashboard/channel/' + params.channelId}>
        <Button variant={'secondary'}>Back to video list</Button>
      </Link>

      <Separator className="mb-6" />

      <TopicSelect value={videoData!} onSubmit={handleSubmit} />
    </>
  )
}
