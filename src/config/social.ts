import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

import { siteSettings, siteUrl } from "./site-settings"

export const openGraph: OpenGraph = {
  type: 'website',
  url: siteUrl,
  title: siteSettings.title,
  description: siteSettings.description,
  siteName: siteSettings.name,
  images: [
    {
      url: '/og-image.png'
    }
  ]
}

export const twitter: Twitter = {
  card: 'summary_large_image',
  site: siteSettings.creator,
  creator: siteSettings.creator,
  title: siteSettings.title,
  description: siteSettings.description,
  images: ['/og-image.png']
}