import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { createVideoWithTopic } from '@/features/video-meta/actions/video-actions'
import TopicSelect from '@/features/video-meta/components/topic-select'

export default async function Page({
  params,
}: {
  params: { channelId: string }
}) {
  const handleSubmit = async (data: any) => {
    'use server'

    // Update existing video
    const updatedData = Object.assign(data, {
      channel_id: params.channelId,
    })
    return await createVideoWithTopic(updatedData)
  }

  return (
    <>
      <div className="prose-md prose">
        <h2>Create new video</h2>
        <p>Start a new video by adding a topic.</p>
      </div>

      <Link href={'/dashboard/channel/' + params.channelId}>
        <Button variant={'secondary'}>Back to video list</Button>
      </Link>

      <Separator className="mb-6" />
      {/* <TopicGenButton /> */}

      {/* <TopicSelect onSubmit={handleSubmit} /> */}
    </>
  )
}
