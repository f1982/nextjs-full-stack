'use client'

import { AppPathnames } from '@/i18n/i18n-config'
import { Link } from '@/i18n/navigation'
import clsx from 'clsx'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2  py-3 transition-colors',
        isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200',
      )}
      href={href}
      {...rest}
    />
  )
}
