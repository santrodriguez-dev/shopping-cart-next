'use client'

import { ProductCard } from "./ProductCard"
import { ProductItem } from "@/interfaces/Product"

export const ProductList = ({ products }: { products: ProductItem[] }) => {

  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}>
          <ProductCard.Image />
          <ProductCard.FavoriteButton />
          <ProductCard.Title />
          <ProductCard.Rating />
          <ProductCard.Badges />
          <ProductCard.Price />
        </ProductCard>
      )
      )}
    </div>
  )
}
