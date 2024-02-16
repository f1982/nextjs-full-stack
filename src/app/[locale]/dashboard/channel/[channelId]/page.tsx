import NewVideoButton from '../../_lib/new-video-button'
import { retrieveVideos } from '../../video/_lib/video-actions'
import { retrieveChannel } from '../_lib/channel-actions'
import { Separator } from '@/components/ui/separator'

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
          <h2>video details</h2>
          <p>Video count: {videos?.length}</p>
        </div>
      </div>
    </>
  )
}
