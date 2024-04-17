import { retrieveVideo } from '../../../../../features/video/api/video-actions'
import SecondaryNav, { MenuItemData } from '@/components/molecule/secondary-nav'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Video',
  description: 'Video detail page',
}

export default async function VideoLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const { data } = await retrieveVideo(params.id)
  const navConfig: MenuItemData[] = [
    {
      href: `/dashboard/video/${params.id}`,
      label: 'Home',
    },
    {
      href: `/dashboard/video/${params.id}/topic`,
      label: 'Topic',
    },
    {
      href: `/dashboard/video/${params.id}/metadata`,
      label: 'Metadata',
    },
    {
      href: `/dashboard/video/${params.id}/script`,
      label: 'Script',
    },
  ]

  return (
    <>
      <div className="w-full">
        <h3>Video Topic: {data?.topic}</h3>
        <Link href={`/dashboard/channel/${data?.channel_id}/video-list`}>
          Back to list
        </Link>
        <SecondaryNav items={navConfig}></SecondaryNav>
        <Separator className="mb-9"></Separator>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}
