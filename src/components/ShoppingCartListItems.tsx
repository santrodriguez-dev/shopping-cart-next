'use client'

import { CartContext } from "@/context/cart";
import { use } from "react";
import { CartItem } from "./CartItem"

const ShoppingCartListItems = () => {

  const { products } = use(CartContext);

  return (
    <>
      {products.map(product => (
        <CartItem key={product.id} product={product} />
      ))}
    </>
  )
}

export { ShoppingCartListItems }