// 'use client'
import { Button } from '../ui/button'
import { navigationMenuTriggerStyle } from '../ui/navigation-menu'
import Link from 'next/link'
import React from 'react'

export default function LinkButton({
  href,
  label
}: {
  href: string
  label: string
}) {
  return (
    // <Link href={href} className={navigationMenuTriggerStyle()}>
    <Link href={href} passHref>
      <Button variant={'link'}>{label}</Button>
    </Link>
  )
}
