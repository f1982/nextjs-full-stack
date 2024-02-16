import DescriptionBlock from '../../_lib/description-block'
import TagsBlock from '../../_lib/tags-block'
import TitleBlock from '../../_lib/titles-block'
import { retrieveVideo } from '../../_lib/video-actions'
import { ServerError } from '@/components/molecule/server-error'
import { Separator } from '@/components/ui/separator'
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

      <TitleBlock videoData={videoData} />
      <DescriptionBlock videoData={videoData} />
      <TagsBlock videoData={videoData} />
    </div>
  )
}
