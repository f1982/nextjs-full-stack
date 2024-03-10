import DescriptionBlock from '../../../../../../features/dashboard/components/components/description-block'
import TagsBlock from '../../../../../../features/dashboard/components/components/tags-block'
import TitleBlock from '../../../../../../features/dashboard/components/components/titles-block'
import { retrieveVideo } from '../../../../../../features/video/api/video-actions'
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
