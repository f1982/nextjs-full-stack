import CTA from '../_modules/components/page/cta'
import FAQ from '../_modules/components/page/faq'
import Features from '../_modules/components/page/features'
import Hero from '../_modules/components/page/hero'
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
      <p>{process.env.OPENAI_API_KEY}</p>
    </>
  )
}
