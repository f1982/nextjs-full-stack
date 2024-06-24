import Footer from '@/components/page/footer/footer'
import { footerLinks, socialLinks } from '@/config/link-setting'
import SiteLogo from '@/lib/site-logo'
import Link from 'next/link'
import React from 'react'

export default function SiteFooter() {
  return (
    <Footer
      logo={
        <Link href="/">
          <SiteLogo />
        </Link>
      }
      sns={socialLinks}
      links={footerLinks}
      copyright="© Copyright 2021. All rights reserved."
      slogan="Made with ❤️ by Emoji You"
    />
  )
}
