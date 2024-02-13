'use client'

import { AppPathnames } from '@/i18n/i18n-config'
import { Link } from '@/i18n/navigation'
import clsx from 'clsx'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

export default function NavigationLinkNormal({ href, ...rest }) {
  const pathname1 = usePathname()
  const isActive = pathname1 === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2  py-3 transition-colors',
        isActive ? 'text-red-500' : 'text-gray-400 hover:text-gray-200',
      )}
      href={href}
      {...rest}
    />
  )
}
