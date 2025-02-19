'use client'

import { ProductItem } from "@/interfaces/Product";
import { createContext, useReducer, useState } from "react";
import { cartReducer, CartActionsTypesEnum, cartInitialState } from "@/reducers/cart";

type CartContext = {
  products: ProductItem[]
  addProduct: (product: ProductItem) => void
  removeProduct: (productId: number) => void
}

const initialState: CartContext = {
  addProduct: () => { },
  removeProduct: () => { },
  products: []
}

const CartContext = createContext<CartContext>(initialState);

const CartProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addProduct = (product: ProductItem) => {
    dispatch({ type: CartActionsTypesEnum.ADD_PRODUCT, payload: product })
  }

  const removeProduct = (productId: number) => {
    dispatch({ type: CartActionsTypesEnum.REMOVE_PRODUCT, payload: productId })
  }

  return (
    <CartContext value={{ addProduct, products: state.products, removeProduct }}>
      {children}
    </CartContext>
  )
}

export { CartContext, CartProvider }
