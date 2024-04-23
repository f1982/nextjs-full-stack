import DarkModeToggle from '@/components/molecule/dark-mode-toggle'
import Header from '@/components/page/header/header'
import { navMenuData } from '@/config/link-setting'
import LocaleSwitcher from '@/i18n/locale-switcher'
import SiteLogo from '@/lib/site-logo'
import Link from 'next/link'
import React from 'react'

export default function SiteHeader() {
  return (
    <>
      <Header
        left={
          <Link
            data-test="leftLink"
            href="/"
            title="back to emojiu.cc homepage">
            <SiteLogo />
          </Link>
        }
        data={navMenuData}
        right={
          <div className="flex flex-row gap-3">
            <DarkModeToggle />
            <LocaleSwitcher />
          </div>
        }
      />
    </>
  )
}
