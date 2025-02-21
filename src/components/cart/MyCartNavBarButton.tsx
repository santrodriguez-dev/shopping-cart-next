'use client'

import { CartContext } from "@/store/cart-store";
import Link from "next/link";
// import Link from "next/link";
import { use } from "react";

const MyCartNavBarButton = () => {

  const { products } = use(CartContext);

  const productsCount = products.reduce((acc, curr) => curr.quantity + acc, 0)

  return (
    <Link href="/shopping-cart" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
      <span className="sr-only">
        Cart
      </span>
      <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
      </svg>
      <span className="hidden sm:flex">My Cart</span>
      {productsCount ? <div className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{productsCount}</div> : null}
    </Link>
  )
}

export { MyCartNavBarButton }