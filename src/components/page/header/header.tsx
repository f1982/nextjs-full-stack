'use client'

import React from 'react'

import clsx from 'clsx'

import { MenuItemData } from './menu-data'
import { NavMenuItem } from './menu-item'
import { MobileNavPopover } from './mobile-menu-sheet'

type HeaderProps = {
  left?: React.ReactNode
  right?: React.ReactNode
  data: MenuItemData[]
  className?: string
}

const Header = ({ left, right, data, className }: HeaderProps) => {
  return (
    <header className={clsx('border-b-0 border-b-border', className)}>
      <div className="container mt-6">
        <div className="flex w-full items-center justify-between">
          {left}

          <menu
            data-test="desktopNavMenu"
            className="hidden flex-row gap-9 lg:flex">
            {data.map((item) => (
              <NavMenuItem
                key={item.link}
                label={item.title}
                link={item.link}
                icon={item.icon}></NavMenuItem>
            ))}
          </menu>
          <div className="hidden lg:flex">{right}</div>

          {/* Menu button only show in small screen */}
          <MobileNavPopover left={left} right={right} data={data} />
        </div>
      </div>
    </header>
  )
}

export default Header
