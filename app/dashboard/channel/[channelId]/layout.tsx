import { retrieveChannel } from '../_lib/channel-actions'
import LinkButton from '@/app/_modules/components/molecule/link-button'
import { Separator } from '@/app/_modules/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video',
  description: 'Video detail page'
}

export default async function VideoLayout({
  params,
  children
}: {
  params: { channelId: string }
  children: React.ReactNode
}) {
  const channelInf = await retrieveChannel(params.channelId)
  console.log('channelInf', channelInf)

  return (
    <>
      <div className="prose prose-lg">
        <h3>{channelInf.data?.channel_name}</h3>
        <p>{channelInf.data?.description}</p>
      </div>

      <div className="flex flex-row gap-3">
        <LinkButton
          label="Home"
          href={`/dashboard/channel/${params.channelId}/`}></LinkButton>
        <LinkButton
          label="Settings"
          href={`/dashboard/channel/${params.channelId}/settings`}></LinkButton>
        <LinkButton
          label="Prompt"
          href={`/dashboard/channel/${params.channelId}/prompt`}></LinkButton>
        <LinkButton
          label="Video List"
          href={`/dashboard/channel/${params.channelId}/video-list`}></LinkButton>
      </div>

      <Separator className="mb-9" />

      <main>
        <div>{children}</div>
      </main>
    </>
  )
}
