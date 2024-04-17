'use client'

import { NavItemData } from './nav-menu-data'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { usePathname } from '@/i18n/navigation'
import clsx from 'clsx'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export const MobileNavPopover = ({
  left,
  right,
  data,
}: {
  left?: React.ReactNode
  right?: React.ReactNode
  data: NavItemData[]
}) => {
  const pathname = usePathname()

  return (
    <Dialog>
      <DialogTrigger className="lg:hidden" asChild>
        <Menu />
      </DialogTrigger>
      <DialogContent className="h-full w-full">
        <div className="flex flex-col gap-6">
          <div className="mt-9 flex flex-row justify-between">
            {left}
            {right}
          </div>
          <nav className={clsx('flex flex-col gap-6')}>
            {data.map((item) => {
              return (
                <Link key={item.link} href={item.link}>
                  <DialogClose className="w-full text-left">
                    <span
                      className={clsx(
                        'w-full',
                        pathname === item.link ? 'font-bold' : 'font-normal',
                      )}>
                      {item.title}
                    </span>
                  </DialogClose>
                </Link>
              )
            })}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  )
}
