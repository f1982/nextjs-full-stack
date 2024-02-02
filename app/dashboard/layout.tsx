import UserInfo from '../_modules/components/server/user-info'
import { Logo } from '../_modules/dashboard/logo'
import { Menubar } from '../_modules/dashboard/menu-bar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default async function RootLayout({
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
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <main
          className="my-1 pt-2 pb-2 px-10 flex-1 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
          <UserInfo />
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}
