import LinkButton from './link-button'
import React from 'react'

export type MenuItemData = { label: string; href: string }

export default function SecondaryNav({ items }: { items: MenuItemData[] }) {
  return (
    <div className="flex flex-row gap-3">
      {items.map((item: MenuItemData) => {
        return (
          <div key={item.href}>
            <LinkButton label={item.label} href={item.href}></LinkButton>
          </div>
        )
      })}
    </div>
  )
}
