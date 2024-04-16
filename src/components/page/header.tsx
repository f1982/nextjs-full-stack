'use client'

import clsx from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const isActive: (pathname: string) => boolean = (pathname) =>
    pathname === pathname

  const { data: session, status } = useSession()

  let left = (
    <div className="left">
      <Link href="/" data-active={isActive('/')}>
        Feed
      </Link>
    </div>
  )

  let right: any = null

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/" data-active={isActive('/')}>
          Feed
        </Link>
      </div>
    )
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    )
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin" data-active={isActive('/signup')}>
          Log in
        </Link>
      </div>
    )
  }

  if (session) {
    left = (
      <div className="flex flex-row gap-3">
        <Link href="/blog" data-active={isActive('/')}>
          Feed
        </Link>
        <Link href="/blog/drafts" data-active={isActive('/drafts')}>
          My drafts
        </Link>
      </div>
    )
    right = (
      <div className="flex flex-row gap-3">
        <p>
          {session?.user?.name} ({session?.user?.email})
        </p>
        <Link href="/blog/create">
          <button>New post</button>
        </Link>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    )
  }

  return (
    <nav className={clsx("flex h-9 flex-row items-center justify-between border-b-2 border-gray-300")}>
      {left}
      {right}
    </nav>
  )
}
