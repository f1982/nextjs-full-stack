import { ExtraLinks } from '../molecule/footer/link-matrix'
import SiteLogo from '../molecule/site-logo'
import { footerLinks } from '@/config/menu-setting'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          <a href="#" className="mb-8 inline-block max-w-full">
            <SiteLogo />
          </a>
          <div className="text-sm text-muted-foreground">
            This is a website that is awesome
          </div>
          {/* <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-primary">
              About
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-primary">
              Features
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-primary">
              Works
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-primary">
              Support
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal transition hover:text-primary">
              Help
            </a>
          </div> */}
          <div className="mb-8 mt-8 w-48 border-b border-solid border-b-border"></div>

          <ExtraLinks data={footerLinks} className="mb-8 w-full md:w-2/3" />

          {/* <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
            <a
              href="#"
              className="ifont-bold mx-auto flex max-w-[24px] flex-col">
              <Image
                width={100}
                height={100}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bc5e36f4a882999413_Frame%205479.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex max-w-[24px] flex-col font-bold">
              <Image
                width={100}
                height={100}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf093252f2b2114050_Frame%205480.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="ifont-bold mx-auto flex max-w-[24px] flex-col">
              <Image
                width={100}
                height={100}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bde1a389ee15d86fc6_Frame%205481-1.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex max-w-[24px] flex-col font-bold">
              <Image
                width={100}
                height={100}
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf10337117b26b8e51_Frame%205481.svg"
                alt=""
                className="inline-block"
              />
            </a>
          </div> */}
          <p className="text-xs text-muted-foreground">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
