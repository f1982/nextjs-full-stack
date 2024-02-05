import { retrieveVideo } from '../../_lib/video-actions'
import { ServerError } from '@/app/_modules/components/molecule/server-error'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
  const { status, data: videoData } = await retrieveVideo(params.id)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }

  return (
    <div>
      <h1>Hello world</h1>
      <p>video Metadata</p>
      <div>
        <p>{JSON.stringify(videoData)}</p>
      </div>
    </div>
  )
}
