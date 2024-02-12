import { retrieveChannel } from '../_lib/channel-actions'
import NavigationBar, { NavBarItem } from '@/components/molecule/nav-bar'
import { Separator } from '@/components/ui/separator'
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

export default async function VideoLayout({
  params: { channelId },
  children,
}: {
  params: { channelId: string }
  children: React.ReactNode
}) {
  const channelInf = await retrieveChannel(channelId)

  return (
    <>
      <div className="prose prose-sm">
        <p>
          <p>{JSON.stringify(channelInf)}</p>
        </p>
      </div>
      <NavigationBar items={generateNavList(channelId)} />
      <Separator className="my-2" />

      <main>
        <div>{children}</div>
      </main>
    </>
  )
}
