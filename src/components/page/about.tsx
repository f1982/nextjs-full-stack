import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* <!-- Title --> */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
          Meet Flowspark
        </h2>
        <p className="mb-8 max-w-lg text-sm text-[#808080] sm:text-base lg:mb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Image
            width="100"
            height="100"
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a30c42421ae3cbe5abb9_about%20image.svg"
            alt=""
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
            <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
            <p className="text-sm text-[#808080] sm:text-base">
              {' '}
              Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
              bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla.
              Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum
              curabitur vitae nunc. Dictumst vestibulum rhoncus est
              pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
              dignissim cras tincidunt lobortis feugiat vivamus.
              <br />
              <br />
              Massa id neque aliquam vestibulum morbi blandit. Nulla
              pellentesque dignissim enim sit amet venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
