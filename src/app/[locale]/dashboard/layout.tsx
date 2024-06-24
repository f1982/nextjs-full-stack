import { Metadata } from 'next'

import { Newspaper } from 'lucide-react'

import UserInfo from '@/components/molecule/user-info'
import { Toaster } from '@/components/ui/toaster'

import { Logo } from '@/features/dashboard/components/logo'
import { Menubar } from '@/features/dashboard/components/menubar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden">
        <nav className="flex w-24 flex-col items-center py-4">
          <Logo />
          <Menubar />
          <div className="mt-auto flex items-center rounded-full p-2">
            <a href="#">
              <Newspaper />
            </a>
          </div>
        </nav>
        <main className="my-1 flex-1 overflow-y-auto rounded-l-lg px-10 pb-2 pt-2">
          <UserInfo showEmail={true} />
          <div>{children}</div>
        </main>
        <Toaster />
      </div>
    </>
  )
}
