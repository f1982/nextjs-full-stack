import DarkModeToggle from '@/components/molecule/dark-mode-toggle'
import Header from '@/components/molecule/header/header'
import SiteLogo from '@/components/molecule/site-logo'
import { navMenuData } from '@/config/link-setting'
import LocaleSwitcher from '@/i18n/locale-switcher'
import React from 'react'

export default function SiteHeader() {
  return (
    <>
      <Header
        logo={<SiteLogo />}
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
