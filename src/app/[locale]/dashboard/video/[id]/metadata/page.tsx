import { ServerError } from '@/components/molecule/server-error'
import { Separator } from '@/components/ui/separator'
import { retrieveVideo } from '@/features/video-meta/actions/video-actions'
import DescriptionBlock from '@/features/video-meta/components/description-block'
import TagsBlock from '@/features/video-meta/components/tags-block'
import TitleBlock from '@/features/video-meta/components/titles-block'
import VideoMetadataForm from '@/features/video-meta/components/video-metadata-form'
import React from 'react'

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

      <VideoMetadataForm videoId={videoData.id} />

      <TitleBlock videoData={videoData} />
      <DescriptionBlock videoData={videoData} />
      <TagsBlock videoData={videoData} />
    </div>
  )
}
