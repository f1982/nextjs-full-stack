import SecondaryNav, {
  NavItemData
} from '@/app/_modules/components/molecule/secondary-nav'
import { Separator } from '@/app/_modules/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video',
  description: 'Video detail page'
}

export default async function VideoLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const navConfig: NavItemData[] = [
    {
      href: `/dashboard/video/${params.id}`,
      label: 'Home'
    },
    {
      href: `/dashboard/video/${params.id}/topic`,
      label: 'Topic'
    },
    {
      href: `/dashboard/video/${params.id}/metadata`,
      label: 'Metadata'
    },
    {
      href: `/dashboard/video/${params.id}/script`,
      label: 'Script'
    }
  ]

  return (
    <>
      <div className="w-full">
        <h3>this is video layout part</h3>
        <SecondaryNav items={navConfig}></SecondaryNav>
        <Separator className="mb-9"></Separator>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}
