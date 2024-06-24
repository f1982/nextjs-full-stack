'use client'

import DarkModeToggle from '../molecule/darkmode-switcher'
import UserInfo from '../molecule/user-info'
import { MenuSquareIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="border-gray-200">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            width={200}
            height={40}
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Zoe&Andy
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* <Link href="/dashboard">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              dashbaord
            </button>
          </Link> */}
          <UserInfo showEmail={false} />
          <DarkModeToggle />
          <button
            data-te-collapse-init
            data-te-collapse-target="#navbar-cta"
            type="button"
            className=""
            aria-controls="navbar-cta"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <MenuSquareIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta">
          <ul className="mt-4 flex flex-row gap-9">
            <li>
              <a
                href="/doc"
                className=""
                aria-current="page">
                Doc
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="">
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
