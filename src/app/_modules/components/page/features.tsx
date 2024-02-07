import Image from 'next/image'
import React from 'react'

export default function Features() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Make every step user-centric
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="grid gap-8 p-8 md:p-10">
            <Image
              width="100"
              height="100"
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bda43ea08a612343b1f3_Vector-3.svg"
              alt=""
              className="inline-block h-8"
            />
            <p className="text-xl font-semibold">Support</p>
            <p className="text-sm text-[#636262]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
          <div className="grid gap-8 p-8 md:p-10">
            <Image
              width="100"
              height="100"
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdb1bd05f5915d7bf31c_Vector-4.svg"
              alt=""
              className="inline-block h-8"
            />
            <p className="text-xl font-semibold">Organise</p>
            <p className="text-sm text-[#636262]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
          <div className="grid gap-8 p-8 md:p-10">
            <Image
              width="100"
              height="100"
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
              alt=""
              className="inline-block h-8"
            />
            <p className="text-xl font-semibold">Flexibility</p>
            <p className="text-sm text-[#636262]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
