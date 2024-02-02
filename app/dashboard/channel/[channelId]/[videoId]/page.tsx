import ServerError from '@/app/_modules/components/molecule/server-error'
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
    console.log('video topic:', data)

    // Test return error message
    // return { status: 'failure', message: 'You need to log in first' }

    // Update existing video
    if (!params.videoId) {
      const updatedData = Object.assign(data, {
        channel_id: params.channelId
      })
      console.log('add new updatedData', updatedData)
      return await createVideoWithTopic(updatedData)
    }

    // Create new video
    const updatedData = { ...data, id: params.videoId }
    console.log('edit video updatedData', updatedData)

    return await updateVideo(updatedData)
  }

  const topicOpts = [
    'How to make pancakes',
    'Top 10 movies of 2022',
    'Beginners guide to knitting'
  ]

  const { status, data: videoData } = await retrieveVideo(params.videoId)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }

  return (
    <>
      <div className="prose prose-md mb-12">
        {params.videoId ? <h2>Edit video</h2> : <h2>Create new video</h2>}
        <p>Start a new video by adding a topic.</p>
        <p>channelId: {params.channelId}</p>
        <Link href={'/dashboard/channel/' + params.channelId}>
          Back to video list
        </Link>
      </div>

      <Separator className="mb-6" />

      <TopicSelect
        value={videoData!}
        options={topicOpts}
        onSubmit={handleSubmit}
      />
    </>
  )
}
