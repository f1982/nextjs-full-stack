import Link from 'next/link'

import { ServerError } from '@/components/molecule/server-error'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { retrieveVideo } from '@/features/video-meta/actions/video-actions'
import TopicSelect from '@/features/video-meta/components/topic-select'

export default async function TopicPage({
  params,
}: {
  params: { id: string }
}) {
  const { status, data: videoData } = await retrieveVideo(params.id)

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

      <TopicSelect videoId={params.id} />
    </>
  )
}
