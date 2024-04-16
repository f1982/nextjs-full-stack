import { NavItemData } from '@/components/molecule/header/nav-menu-data'

export const navMenuData: NavItemData[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Doc',
    link: '/doc',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Dashboard',
    link: '/dashboard',
  },
]

export const socialLinks: NavItemData[] = [
  {
    title: 'Twitter',
    link: 'https://twitter.com/emojiyou',
  },
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UC8_l368_87i370525030',
  },
]

export const otherLinks: NavItemData[] = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    title: 'Terms of Service',
    link: '/terms-of-service',
  },
]

export const footerLinks = [navMenuData, socialLinks, otherLinks]
