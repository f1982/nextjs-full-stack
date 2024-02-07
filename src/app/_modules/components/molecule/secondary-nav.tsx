import LinkButton from './link-button'
import React from 'react'

export type NavItemData = { label: string; href: string }

export default function SecondaryNav({ items }: { items: NavItemData[] }) {
  return (
    <div className="flex flex-row gap-3">
      {items.map((item: NavItemData) => {
        return (
          <div key={item.href}>
            <LinkButton label={item.label} href={item.href}></LinkButton>
          </div>
        )
      })}
    </div>
  )
}
