import SiteLogo from '@/components/molecule/site-logo'
import Footer from '@/components/page/footer'
import { footerLinks, socialLinks } from '@/config/link-setting'
import React from 'react'

export default function SiteFooter() {
  return (
    <Footer
      logo={<SiteLogo />}
      sns={socialLinks}
      links={footerLinks}
      copyright="© Copyright 2021. All rights reserved."
      slogan="Made with ❤️ by Emoji You"
    />
  )
}
