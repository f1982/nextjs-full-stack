// 'use client'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function LinkButton({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link href={href} passHref>
      <Button variant={'link'}>{label}</Button>
    </Link>
  )
}
