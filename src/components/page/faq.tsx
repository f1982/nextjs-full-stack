import React from 'react'

export default function FAQ() {
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="container mx-auto py-16 md:py-24 lg:py-32">
        {/* <!-- Heading Div --> */}
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Frequently Asked{' '}
            <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[528px] ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        {/* <!-- FAQ Div --> */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] ">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                How this theme is different from others in market?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 ">
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] ">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                What is your policy on distributon of Flowspark assets?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 ">
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] ">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                How can I contribute to Flowspark?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 ">
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] ">
            <div className="flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">
                What other themes do you have?
              </p>
              <div className="relative ml-10 flex h-8 w-8 items-center justify-center bg-white">
                <div className="absolute h-4 w-0.5 bg-black"></div>
                <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
              </div>
            </div>
            <p className="mb-4 ">
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
        </div>
        <p className="text-center">
          Can’t find the answer you’re looking for? Reach out to our{' '}
          <a href="#" className="font-bold text-[#1353fe]">
            customer support team
          </a>
          .
        </p>
      </div>
    </section>
  )
}
