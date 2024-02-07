import TopicSelect from '@/app/dashboard/video/_lib/topic-select'
import { createVideoWithTopic } from '@/app/dashboard/video/_lib/video-actions'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default async function Page({
  params
}: {
  params: { channelId: string }
}) {
  const handleSubmit = async (data: any) => {
    'use server'

    // Update existing video
    const updatedData = Object.assign(data, {
      channel_id: params.channelId
    })
    return await createVideoWithTopic(updatedData)
  }

  return (
    <>
      <div className="prose prose-md">
        <h2>Create new video</h2>
        <p>Start a new video by adding a topic.</p>
      </div>

      <Link href={'/dashboard/channel/' + params.channelId}>
        <Button variant={'secondary'}>Back to video list</Button>
      </Link>

      <Separator className="mb-6" />

      <TopicSelect onSubmit={handleSubmit} />
    </>
  )
}
