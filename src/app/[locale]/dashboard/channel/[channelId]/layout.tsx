import NavigationBar, { NavBarItem } from '@/components/molecule/nav-bar'
import { ServerError } from '@/components/molecule/server-error'
import { Separator } from '@/components/ui/separator'
import { retrieveChannel } from '@/features/channel/api/channel-actions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video',
  description: 'Video detail page',
}

function generateNavList(id: string): NavBarItem[] {
  const baseUrl = `/dashboard/channel/${id}`
  return [
    {
      label: 'Info',
      link: baseUrl,
    },
    {
      label: 'Video list',
      link: `${baseUrl}/video-list`,
    },
    {
      label: 'Setting',
      link: `${baseUrl}/settings`,
    },
    {
      label: 'Prompt',
      link: `${baseUrl}/prompt`,
    },
  ]
}

export default async function ChannelLayout({
  params: { channelId },
  children,
}: {
  params: { channelId: string }
  children: React.ReactNode
}) {
  const channelInf = await retrieveChannel(channelId)
  console.log('channelInf', channelInf)
  if (!channelInf.data) {
    return <ServerError message="can get channel info"></ServerError>
  }

  return (
    <>
      <div className="prose prose-sm">
        <p>{JSON.stringify(channelInf)}</p>
      </div>
      <NavigationBar items={generateNavList(channelId)} />
      <Separator className="my-2" />

      <main>
        <div>{children}</div>
      </main>
    </>
  )
}
