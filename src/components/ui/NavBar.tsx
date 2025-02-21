'use client'

import Link from "next/link";
import { MyCartNavBarButton } from "../cart/MyCartNavBarButton";
import { useUIStore } from "@/store";
import { SHOP_CATEGORIES } from "@/constants";
import Image from "next/image";

export const NavBar = () => {

  const toggleSideMenu = useUIStore(state => state.toggleSideMenu)

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link href={'/'}>
                <Image
                  src={'https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg'}
                  alt="logo"
                  width={150}
                  height={35}
                  className="block w-auto h-8 dark:hidden"
                />
                <Image
                  src={'https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg'}
                  alt="logo"
                  width={150}
                  height={35}
                  className="hidden w-auto h-8 dark:block"
                />
              </Link>
            </div>

          </div>

          <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
            {SHOP_CATEGORIES.map((category) => (
              <li key={category}>
                <Link href={`/${category}`} className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center lg:space-x-2">
            <MyCartNavBarButton />

            <button onClick={toggleSideMenu} id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
