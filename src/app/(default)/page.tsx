import CTA from '../../components/page/cta'
import FAQ from '../../components/page/faq'
import Features from '../../components/page/features'
import Hero from '../../components/page/hero'
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
