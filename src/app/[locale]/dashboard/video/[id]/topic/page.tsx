import TopicSelect from '@/features/video/components/topic-select'
import {
  createVideoWithTopic,
  retrieveVideo,
  updateVideo,
} from '@/features/video/api/video-actions'
import { ServerError } from '@/components/molecule/server-error'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default async function TopicPage({
  params,
}: {
  params: { id: string }
}) {
  const handleSubmit = async (data: any) => {
    'use server'

    // Update existing video
    if (!params.id) {
      const updatedData = Object.assign(data, {
        channel_id: params.id,
      })
      return await createVideoWithTopic(updatedData)
    }

    // Create new video
    const updatedData = { ...data, id: params.id }
    return await updateVideo(updatedData)
  }

  const { status, data: videoData } = await retrieveVideo(params.id)
  console.log('videoData', videoData)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }

  return (
    <>
      <div className="prose-md prose">
        {params.id ? <h2>Edit video</h2> : <h2>Create new video</h2>}
        <p>Start a new video by adding a topic.</p>
      </div>

      <Link href={'/dashboard/channel/' + videoData.channel_id}>
        <Button variant={'secondary'}>Back to video list</Button>
      </Link>

      <Separator className="mb-6" />

      <TopicSelect value={videoData!} onSubmit={handleSubmit} />
    </>
  )
}
