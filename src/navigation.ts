import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { locales, localePrefix, pathnames } from './i18n/i18n-config'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
