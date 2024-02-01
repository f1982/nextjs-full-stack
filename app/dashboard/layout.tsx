import { Menubar } from '../_modules/dashboard/menu-bar'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const Logo = () => (
    <div>
      <Link href={'/'}>
        <svg
          className="h-8 w-8 fill-current text-blue-600 dark:text-blue-300"
          viewBox="0 0 24 24">
          <path
            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
    6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
    15l5-2.73V16z"></path>
        </svg>
      </Link>
    </div>
  )

  return (
    <>
      <div className="h-screen w-full flex overflow-hidden select-none">
        <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
          <Logo />
          <Menubar />
          <div
            className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full">
            {/* <!-- important action --> */}

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
          className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
          <div className="flex flex-col capitalize text-3xl">
            <span className="font-semibold">hello,</span>
            <span>tempest!</span>
          </div>
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}
