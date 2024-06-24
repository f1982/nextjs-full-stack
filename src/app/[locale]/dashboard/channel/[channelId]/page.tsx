import { Suspense } from 'react'

import Spinner from '@/components/molecule/spinner'
import { Separator } from '@/components/ui/separator'

import { retrieveChannel } from '@/features/channel/api/channel-actions'
import VideoListView from '@/features/channel/components/video-list-view'
import { retrieveVideos } from '@/features/video-meta/actions/video-actions'
import NewVideoButton from '@/features/video-meta/components/new-video-button'

export default async function Page({
  params,
}: {
  params: { channelId: string }
}) {
  const channelInf = await retrieveChannel(params.channelId)

  const { status, data: videos } = await retrieveVideos(params.channelId)

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="prose prose-lg">
          <h2>Channel info</h2>
          <p>Channel id: {params.channelId}</p>
          <p>Channel name: {channelInf.data?.channel_name}</p>
          <p>Channel description: {channelInf.data?.description}</p>
          <p>Channel host: {channelInf.data?.host}</p>
          <p>Channel keyword: {channelInf.data?.keyword}</p>
          <p>Channel language: {channelInf.data?.language}</p>
        </div>

        <Separator></Separator>

        <NewVideoButton channelId={params.channelId}></NewVideoButton>
        <div className="prose prose-lg">
          <p>Videos count: {videos?.length}</p>
        </div>
        <Suspense fallback={<Spinner />}>
          <VideoListView channelId={params.channelId}></VideoListView>
        </Suspense>
      </div>
    </>
  )
}
