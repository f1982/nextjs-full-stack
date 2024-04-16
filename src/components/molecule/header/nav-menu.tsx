'use client'

import { NavItemData } from './nav-menu-data'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavItems({
  itemData,
  handleClick,
}: {
  itemData: NavItemData[]
  handleClick?: () => void
}) {
  const pathname = usePathname()

  const isActive = (link: string) => {
    if (pathname?.split('/')[2] === undefined && link === '/') {
      return true
    }

    return pathname?.split('/')[2] === link.split('/')[1]
  }
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
              'relative flex items-center text-sm font-bold hover:text-foreground',
              isActive(item.link) ? 'text-foreground' : 'text-muted-foreground',
            )}
            href={item.link}>
            {item.title}
          </Link>
        )
      })}
    </>
  )
}
