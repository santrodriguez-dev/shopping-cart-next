'use client'

import { ProductItem } from "@/interfaces/Product";
import { createContext, useEffect, useReducer } from "react";
import { cartReducer, CartActionsTypesEnum } from "@/store/reducers/cart";
import { ProductCartItem } from "@/interfaces/Cart";

export type CartState = {
  savings: number
  products: ProductCartItem[]
  addProduct: (product: ProductItem) => void
  removeProduct: (productId: number) => void
  clearCart: () => void
  addProductQuantity: (productId: number, quantityToAdd: number) => void
}

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart')
  return JSON.parse(cart || '[]')
}

const updateCartLocalStorage = (products: ProductCartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(products))
}

const cartInitialState: CartState = {
  addProduct: () => { },
  removeProduct: () => { },
  clearCart: () => { },
  addProductQuantity: () => { },
  products: getCartFromLocalStorage(),
  savings: 2
}

const CartContext = createContext<CartState>(cartInitialState);

const CartProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const { products, savings } = state

  useEffect(() => updateCartLocalStorage(products), [products])

  const addProduct = (product: ProductItem) => {
    dispatch({ type: CartActionsTypesEnum.ADD_PRODUCT, payload: product })
  }

  const removeProduct = (productId: number) => {
    dispatch({ type: CartActionsTypesEnum.REMOVE_PRODUCT, payload: productId })
  }

  const clearCart = () => {
    if (products.length === 0) return
    dispatch({ type: CartActionsTypesEnum.CLEAR_CART, payload: null })
  }

  const addProductQuantity = (productId: number, quantityToAdd: number) => {
    dispatch({ type: CartActionsTypesEnum.ADD_PRODUCT_QUANTITY, payload: { quantityToAdd, productId } })
  }


  return (
    <CartContext value={{
      savings,
      addProduct,
      removeProduct,
      clearCart,
      products,
      addProductQuantity
    }}>
      {children}
    </CartContext>
  )
}

export { CartContext, CartProvider }
