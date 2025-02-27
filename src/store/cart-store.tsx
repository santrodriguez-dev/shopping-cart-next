'use client'

import { ProductItem } from "@/interfaces/Product";
import { createContext, useEffect, useMemo, useReducer } from "react";
import { cartReducer, CartActionsTypesEnum } from "@/store/reducers/cart";
import { ProductCartItem } from "@/interfaces/Cart";
import { getTotalProducts } from "@/utils/cart";

export type CartState = {
  savings: number
  products: ProductCartItem[]
  addProduct: (product: ProductItem) => void
  removeProduct: (productId: number) => void
  clearCart: () => void
  addProductQuantity: (productId: number, quantityToAdd: number) => void
  totalItems: number
  getProductById: (productId: number) => ProductCartItem | undefined
}

const getCartFromLocalStorage = () => {
  if (typeof window === 'undefined') return []
  const cart = localStorage.getItem('cart')
  return JSON.parse(cart || '[]') as ProductCartItem[]
}

const updateCartLocalStorage = (products: ProductCartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(products))
}

const cartInitialState: CartState = {
  addProduct: () => { },
  removeProduct: () => { },
  clearCart: () => { },
  addProductQuantity: () => { },
  totalItems: 0,
  getProductById: () => undefined,
  products: getCartFromLocalStorage(),
  savings: 2
}

const CartContext = createContext<CartState>(cartInitialState);

const CartProvider = ({ children, store }: { children: React.ReactNode, store?: CartState }) => {

  const [state, dispatch] = useReducer(cartReducer, store ?? cartInitialState)
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


  const getProductById = (productId: number) => {
    return products.find(product => product.id === productId)
  }


  return (
    <CartContext value={{
      savings,
      addProduct,
      removeProduct,
      clearCart,
      products,
      addProductQuantity,
      get totalItems() {
        return getTotalProducts(products)
      },
      getProductById
    }}>
      {children}
    </CartContext>
  )
}

export { CartContext, CartProvider }
