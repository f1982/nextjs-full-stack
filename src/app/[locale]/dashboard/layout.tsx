import { Logo } from './_lib/logo'
import { Menubar } from './_lib/menubar'
import UserInfo from '@/components/molecule/user-info'
import { Toaster } from '@/components/ui/toaster'
import { Newspaper } from 'lucide-react'
import { Metadata } from 'next'

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
      <div className="flex h-screen w-full select-none overflow-hidden">
        <nav className="flex w-24 flex-col items-center bg-white py-4  dark:bg-gray-800">
          <Logo />
          <Menubar />
          <div
            className="mt-auto flex items-center rounded-full bg-purple-200
			p-2 text-blue-700 dark:text-blue-500">
            <a href="#">
              <Newspaper />
            </a>
          </div>
        </nav>
        <main
          className="my-1 flex-1 overflow-y-auto rounded-l-lg px-10 pb-2 pt-2
		transition duration-500 ease-in-out dark:bg-black">
          <UserInfo showEmail={true} />
          <div>{children}</div>
        </main>
        <Toaster />
      </div>
    </>
  )
}
