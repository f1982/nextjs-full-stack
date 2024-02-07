'use client'

import { useSession } from 'next-auth/react'

export default function UserInfo() {
  const { data: session } = useSession()
  if (!session) return null

  return (
    <div className="flex flex-row capitalize text-3xl mb-9">
      <span className="font-semibold">hello,</span>
      <span>{session?.user?.name}</span>
    </div>
  )
}
