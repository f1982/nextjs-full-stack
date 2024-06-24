import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className={clsx('flex-1', 'flex w-full flex-col')}>{children}</main>
      <SiteFooter />
    </>
  )
}
