import Image from 'next/image'
import React from 'react'

export default function CTA() {
  return (
    <section>
      <div className="mx-auto w-full py-16 md:py-24">
        <div className="flex w-full flex-col items-center bg-secondary  py-16 text-center text-secondary-foreground md:py-24">
          <h2 className="mb-6 max-w-[600px] flex-col text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
            Lightning Fast Webflow Dev Made Easy{' '}
          </h2>
          <div className="mx-auto">
            <ul className="mb-6 flex flex-col flex-nowrap gap-3 md:mb-10 md:flex-row lg:mb-12">
              <li className="ml-2 mr-2 flex flex-row items-center md:mx-4">
                <Image
                  width="100"
                  height="100"
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  className="mr-2 inline-block h-4 w-4"
                />
                <p className="">300+ UI Blocks</p>
              </li>
              <li className="ml-2 mr-2 flex flex-row items-center md:mx-4">
                <Image
                  width="100"
                  height="100"
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  className="mr-2 inline-block h-4 w-4"
                />
                <p className="">Fully responsive</p>
              </li>
              <li className="ml-2 mr-2 flex flex-row items-center md:mx-4">
                <Image
                  width="100"
                  height="100"
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  className="mr-2 inline-block h-4 w-4"
                />
                <p className="">Just copy & paste</p>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="mb-4 flex flex-row items-center bg-primary px-8 py-4 font-semibold text-primary-foreground transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
            <p className="mr-6 font-bold">Get Started</p>
            <svg
              fill="currentColor"
              className="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg">
              <title>Arrow Right</title>
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
          </a>
          <p className="">No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
