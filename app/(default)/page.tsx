import CTA from '../_modules/components/common/cta'
import FAQ from '../_modules/components/common/faq'
import Features from '../_modules/components/common/features'
import Hero from '../_modules/components/common/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title'
}

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <FAQ />
    </>
  )
}
