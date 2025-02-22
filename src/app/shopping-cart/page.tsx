'use client';

import { CartItem, OrderSummary, RelatedProducts, VoucherForm } from "@/components";
import { CartContext } from "@/store";
import Link from "next/link";
import { use, useLayoutEffect, useState } from "react";

export default function ShoppingCartPage() {
  const { clearCart, products } = use(CartContext);
  const [isLoaded, setIsLoaded] = useState(false)

  useLayoutEffect(() => setIsLoaded(true), [])

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
          {products.length > 0 && (
            <button
              onClick={clearCart}
              type="button"
              className="inline-flex items-center font-medium hover:text-red-600 hover:underline dark:text-red-500">
              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
              Clear cart
            </button>
          )}
        </div>

        {products.length === 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
            <p className="mt-6">
              <Link href="/Clothes" className="font-medium text-primary-700 hover:underline dark:text-primary-500">Continue shopping</Link>
            </p>
          </div>
        )}

        {products.length > 0 && isLoaded && (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {products.map(product => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
              <RelatedProducts />
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <OrderSummary />
              <VoucherForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
