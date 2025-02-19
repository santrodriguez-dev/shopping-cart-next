'use client'

import { ProductItem } from "@/interfaces/Product";
import { createContext, useReducer } from "react";
import { cartReducer, CartActionsTypesEnum, cartInitialState } from "@/reducers/cart";
import { ProductCartItem } from "@/interfaces/Cart";

type CartContext = {
  products: ProductCartItem[]
  addProduct: (product: ProductItem) => void
  removeProduct: (productId: number) => void
  clearCart: () => void
  addProductQuantity: (productId: number, quantityToAdd: number) => void
}

const initialState: CartContext = {
  addProduct: () => { },
  removeProduct: () => { },
  clearCart: () => { },
  addProductQuantity: () => { },
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

  const clearCart = () => {
    dispatch({ type: CartActionsTypesEnum.CLEAR_CART, payload: null })
  }

  const addProductQuantity = (productId: number, quantityToAdd: number) => {
    dispatch({ type: CartActionsTypesEnum.ADD_PRODUCT_QUANTITY, payload: { quantityToAdd, productId } })
  }

  return (
    <CartContext value={{
      addProduct,
      removeProduct,
      clearCart,
      products: state.products,
      addProductQuantity
    }}>
      {children}
    </CartContext>
  )
}

export { CartContext, CartProvider }
