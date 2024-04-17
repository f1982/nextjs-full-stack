'use client'

import { NavItemData } from './nav-menu-data'
import { usePathname } from '@/i18n/navigation'
import clsx from 'clsx'
import Link from 'next/link'

export function NavItems({
  itemData,
  handleClick,
}: {
  itemData: NavItemData[]
  handleClick?: () => void
}) {
  const pathname = usePathname()

  return (
    <>
      {itemData.map((item) => {
        return (
          <Link
            key={item.link}
            onClickCapture={() => {
              handleClick?.()
            }}
            className={clsx(
              'flex items-center',
              'text-sm font-bold hover:text-foreground',
              pathname === item.link
                ? 'text-foreground'
                : 'text-muted-foreground',
            )}
            href={item.link}>
            {item.title}
          </Link>
        )
      })}
    </>
  )
}
