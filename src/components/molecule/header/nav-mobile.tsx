'use client'

import DarkModeToggle from '../dark-mode-toggle'
import { NavItems } from './nav-menu'
import { NavItemData } from './nav-menu-data'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { LucideCross } from 'lucide-react'

const MobileNav = ({
  handleClose,
  itemData,
  className,
}: {
  handleClose: () => void
  itemData: NavItemData[]
  className?: string
}) => {
  return (
    <nav
      data-test="mobileNavMenu"
      className={clsx(
        'absolute right-0 top-0 z-30 w-full bg-popover text-popover-foreground lg:hidden',
        'duration-800 transition-all',
        className,
      )}>
      <div className="shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
          onClick={handleClose}>
          <LucideCross className="h-9 w-9" />
        </Button>
        <ul
          className={clsx(
            'mt-12 flex-col items-end justify-end',
            '[&>a]:py-6 [&>a]:pl-4 [&>a]:text-lg',
            '[&>a]:border-b [&>a]:border-border ',
          )}>
          <NavItems itemData={itemData} handleClick={handleClose} />
        </ul>
        <div className="px-3 py-6 text-right">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default MobileNav
