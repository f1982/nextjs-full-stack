import { ExtraLinks } from '../molecule/footer/link-matrix'
import SocialIconLinks from '../molecule/footer/social-icon-links'
import { NavItemData } from '../molecule/header/nav-menu-data'
import Link from 'next/link'
import React from 'react'

type FooterProps = {
  logo?: React.ReactNode
  sns: NavItemData[]
  links: NavItemData[][]
  slogan?: string
  copyright?: string
  className?: string
}

export function Slogan({ text }: { text: string }) {
  return <div className="text-sm text-muted-foreground">{text}</div>
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="bg-card py-16 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-9 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <Link href="/">{props.logo}</Link>
            <SocialIconLinks
              data={props.sns}
              className="flex flex-row gap-6"></SocialIconLinks>
            {props.slogan && <Slogan text="Made with ❤️ by Emoji You" />}
          </div>
          <ExtraLinks data={props.links} className="mb-8 w-full md:w-1/3" />
        </div>

        <div>
          <div className="my-9 border-b border-solid border-b-border"></div>
          <p className="text-xs text-muted-foreground">
            {props.copyright || '© Copyright 2021. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
