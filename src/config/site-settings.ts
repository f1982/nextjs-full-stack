import { bingWebmaster } from './services'
import { openGraph, twitter } from './open-graph'
import { Metadata } from 'next'
import { Robots } from 'next/dist/lib/metadata/types/metadata-types'

export const siteHostname = 'emojiu.cc'
export const siteUrl = `https://${siteHostname}`

export const staticUrl = (path: string) => {
  // Static github project
  // https://github.com/f1982/planet-of-images
  const staticRootUrl =
    'https://raw.githubusercontent.com/f1982/planet-of-images/main/emojiu'
  return `${staticRootUrl}/${path}`
}

export const siteSettings = {
  name: 'Emoji You',
  url: siteUrl,
  title: 'Copy paste iphone emojis, Get Heart, Laughing, Skull, Nerd Emojis',
  description:
    'Search for emojis with just one click! Explore a variety of emojis, including heart, laughing, skull, nerd, sad, iPhone, eyes, star, thumbs up, kiss, and heart hand emojis. Enhance your online communication and express yourself effortlessly.',
  author: 'emoji you',
  creator: '@emojiucc',
}

// Add icon image in public folder
const icons = {
  icon: '/icon.png',
  shortcut: '/icon.png',
  apple: '/apple-icon.png',
}

//TODO: add bing bot
const robots: Robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
}

export const siteMetadata: Metadata = {
  // https://dequeuniversity.com/rules/axe/4.7/meta-viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 3,
  },
  category: 'technology',
  title: siteSettings.title,
  description: siteSettings.description,
  keywords:
    'Emoji Copy Paste, Heart Emoji, Laughing Emoji, Skull Emoji, Nerd Emoji, Sad Emoji, Get Emojis in One Click, iPhone Emoji, Eyes Emoji, Star Emoji, Thumbs Up Emoji, Kiss Emoji, Heart Hand Emoji',
  publisher: siteSettings.creator,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons,
  robots,
  openGraph,
  twitter,
  verification: {
    other: bingWebmaster,
  },
}