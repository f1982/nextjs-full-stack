import UserInfo from '@/components/molecule/user-info'
import { Toaster } from '@/components/ui/toaster'
import { Newspaper } from 'lucide-react'
import { Metadata } from 'next'
import { Logo } from './_lib/logo'
import { Menubar } from './_lib/menubar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="h-screen w-full flex overflow-hidden select-none">
        <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
          <Logo />
          <Menubar />
          <div
            className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full">
            <a href="#">
              <Newspaper />
            </a>
          </div>
        </nav>
        <main
          className="my-1 pt-2 pb-2 px-10 flex-1 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
          <UserInfo showEmail={true} />
          <div>{children}</div>
        </main>
        <Toaster />
      </div>
    </>
  )
}
