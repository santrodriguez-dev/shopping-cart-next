import { CartContext } from "@/store"
import clsx from "clsx"
import { use } from "react"

export const QuantityButtons = ({ id, quantity, className }: { quantity: number, id: number, className?: string }) => {

  const { addProductQuantity, products: cartProducts } = use(CartContext)

  return (
    <div className={clsx('flex items-center', className)}>
      <button
        onClick={() => addProductQuantity(id, -1)}
        type="button"
        id="decrement-button"
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
        </svg>
      </button>
      <input readOnly
        value={quantity}
        type="text"
        id="counter-input"
        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" required />
      <button
        onClick={() => addProductQuantity(id, +1)}
        type="button"
        id="increment-button"
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
        </svg>
      </button>
    </div>
  )
}