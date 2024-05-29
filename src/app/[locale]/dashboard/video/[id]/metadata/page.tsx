import { ServerError } from '@/components/molecule/server-error'
import { Separator } from '@/components/ui/separator'

import { retrieveVideo } from '@/features/video-meta/actions/video-actions'

import ContentGenAll from './_component/content-gen-all'

export default async function Page({ params }: { params: { id: string } }) {
  const { status, data: videoData } = await retrieveVideo(params.id)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="prose-md prose">
        <h2>Create new video</h2>
        <p>Start a new video by adding a topic.</p>
        <Separator className="mb-6" />
      </div>

      <ContentGenAll videoData={videoData} />
    </div>
  )
}
