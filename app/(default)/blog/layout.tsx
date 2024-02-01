import Header from '../../_modules/components/common/Header'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="container">
        <Header />
        <ul>
          <li>
            <Link href={'/'}>home</Link>
          </li>
          <li>
            <Link href={'/blog'}>blog</Link>
          </li>
          <li>
            <Link href={'/blog/create'}>create</Link>
          </li>
          <li>
            <Link href={'/blog/drafts'}>drafts</Link>
          </li>
          <li>
            <Link href="/api/auth/signin">Log in</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  )
}
