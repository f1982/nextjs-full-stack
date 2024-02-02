import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* <!-- Component --> */}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* <!-- Heading Div --> */}
          <div className="max-w-[720px]">
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
              Make Every Step{' '}
              <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">
                User - Centric
              </span>
            </h2>
            <p className="mb-6 max-w-[480px] text-[#636262] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">
              Get Started
            </a>
          </div>
          {/* <!-- Image Div --> */}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
            <Image
              width="100"
              height="100"
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg"
              alt=""
              className="relative mx-auto block h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
