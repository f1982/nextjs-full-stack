'use client'

import { NavItems } from './nav-menu'
import { NavItemData } from './nav-menu-data'
import MobileNav from './nav-mobile'
import clsx from 'clsx'
import { RowsIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

type HeaderProps = {
  logo?: React.ReactNode
  right?: React.ReactNode
  data: NavItemData[]
  className?: string
}

const Header = ({ logo, right, data, className }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={clsx('border-b-0 border-b-border', className)}>
      <div className={`container mx-auto mt-6 flex items-center md:h-24`}>
        <div className="flex w-full items-center justify-between">
          <Link
            data-test="logoLink"
            href="/"
            title="back to emojiu.cc homepage">
            {logo}
          </Link>

          {/* Menu, only show on bigger screen */}
          <ul
            data-test="desktopNavMenu"
            className="hidden items-center space-x-9 lg:flex [&>li]:font-normal">
            <NavItems itemData={data} />
          </ul>

          <button
            className="p-3 lg:hidden"
            title="Toggle menu"
            onClick={toggleMenu}>
            <RowsIcon className="h-6 w-6" />
          </button>
          {right}
        </div>

        <MobileNav
          itemData={data}
          className={clsx(
            'transition-all',
            isOpen ? 'visible opacity-100' : 'hidden opacity-0',
          )}
          handleClose={() => {
            setIsOpen(false)
          }}
        />
      </div>
    </header>
  )
}

export default Header
