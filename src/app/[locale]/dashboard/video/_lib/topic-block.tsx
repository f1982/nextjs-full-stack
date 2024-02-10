import TopicSelect from '@/app/[locale]/dashboard/video/_lib/topic-select'
import {
  retrieveVideo,
  updateVideo
} from '@/app/[locale]/dashboard/video/_lib/video-actions'
import { ServerError } from '@/components/molecule/server-error'
import { Separator } from '@/components/ui/separator'

export default async function TopicBlock({ videoId }: { videoId: string }) {
  const handleSubmit = async (data: any) => {
    'use server'

    const updatedData = { ...data, id: videoId }
    return await updateVideo(updatedData)
  }

  const { status, data: videoData } = await retrieveVideo(videoId)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }

  return (
    <>
      <div className="prose prose-md">
        {videoId ? <h2>Edit video</h2> : <h2>Create new video</h2>}
        <p>Start a new video by adding a topic.</p>
      </div>

      <Separator className="mb-6" />

      <TopicSelect value={videoData!} onSubmit={handleSubmit} />
    </>
  )
}
