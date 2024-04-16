'use client'

import { NavItemData } from '../header/nav-menu-data'
import clsx from 'clsx'
import Link from 'next/link'

export function FooterLinkItems({
  itemData,
  handleClick,
}: {
  itemData: NavItemData[]
  handleClick?: () => void
}) {
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
              ` relative flex items-center text-muted-foreground underline underline-offset-4 hover:text-foreground hover:no-underline`,
            )}
            href={item.link}>
            {item.title}
          </Link>
        )
      })}
    </>
  )
}
