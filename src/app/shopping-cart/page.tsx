'use client';

import { OrderSummary, RelatedProducts, ShoppingCartListItems, VoucherForm } from "@/components";
import { CartContext } from "@/store";
import { use } from "react";

export default function ShoppingCartPage() {
  const { clearCart } = use(CartContext);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
          <button
            onClick={clearCart}
            type="button"
            className="inline-flex items-center font-medium hover:text-red-600 hover:underline dark:text-red-500">
            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            Clear cart
          </button>
        </div>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <ShoppingCartListItems />
            </div>
            <RelatedProducts />
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <OrderSummary />
            <VoucherForm />
          </div>
        </div>
      </div>
    </section>
  );
}
