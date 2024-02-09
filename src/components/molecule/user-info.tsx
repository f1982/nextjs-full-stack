'use client'

import { Button } from '../ui/button'
import { signOut, useSession } from 'next-auth/react'

export default function UserInfo({
  showEmail = true
}: {
  showEmail?: boolean
}) {
  const { data: session } = useSession()
  if (!session) return null

  return (
    <div className="flex flex-row justify-between">
      <div>
        <span className="font-semibold">hello,</span>
        <span>{session?.user?.name}</span>
        {showEmail && <span>{session?.user?.email}</span>}
      </div>
      <Button onClick={() => signOut()}>Log out</Button>
    </div>
  )
}
