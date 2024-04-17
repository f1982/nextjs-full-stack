'use client'

import { MenuItemData } from './menu-data'
import { MobileNavMenuItem } from './nav-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from '@/i18n/navigation'
import clsx from 'clsx'
import { Menu } from 'lucide-react'

export const MobileNavPopover = ({
  left,
  right,
  data,
}: {
  left?: React.ReactNode
  right?: React.ReactNode
  data: MenuItemData[]
}) => {
  const pathname = usePathname()

  return (
    <>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-6">
            <div className="mt-9 flex flex-row justify-between">
              {left}
              {right}
            </div>
            <menu className={clsx('flex flex-col gap-6')}>
              {data.map((item) => (
                <MobileNavMenuItem
                  key={item.link}
                  label={item.title}
                  {...item}
                />
              ))}
            </menu>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
