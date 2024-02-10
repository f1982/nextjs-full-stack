'use client'

import { Button } from '../ui/button'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function UserInfo({
  dashboardLabel = 'dashboard',
  showEmail = true,
}: {
  showEmail?: boolean
  dashboardLabel?: string
}) {
  const { data: session } = useSession()
  if (!session)
    return (
      <div>
        <Button onClick={() => signOut()}>Log out</Button>
      </div>
    )

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div>
        <span className="font-semibold">hello,</span>
        <span>{session?.user?.name}</span>
        {showEmail && <span>{session?.user?.email}</span>}
      </div>
      <Link href="/dashboard">{dashboardLabel}</Link>
      <Button onClick={() => signOut()}>Log out</Button>
    </div>
  )
}
