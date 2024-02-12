'use client'

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

export type NavBarItem = {
  label: string
  link: string
}

export default function NavigationBar({ items }: { items: NavBarItem[] }) {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item: NavBarItem) => {
            return (
              <Link key={item.link} href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
