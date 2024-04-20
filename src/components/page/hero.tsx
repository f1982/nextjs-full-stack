import DemoImage from '@/assets/18-Architect.svg'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

export default async function Hero() {
  const t = await getTranslations('homepage')
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="container mx-auto py-16 md:py-24 lg:py-32">
        {/* <!-- Component --> */}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* <!-- Heading Div --> */}
          <div className="max-w-[720px]">
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
              Make Every Step{' '}
              <span className="rotate-8 bg-primary px-4 text-primary-foreground">
                User - Centric
              </span>
            </h2>
            <p className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              className="inline-block rounded-xl bg-primary px-8 py-4 text-center font-semibold text-primary-foreground shadow-xl">
              {t('hi')}
            </a>
          </div>
          <div className="relative left-4 h-full max-h-[560px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
            <Image
              width="100"
              height="100"
              src={DemoImage}
              alt=""
              className="relative mx-auto block h-full w-full max-w-[800px] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
