import { ProductCard, ProductList } from "@/components";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";
import { mockCartProducts, mockProducts } from "../mocks/products";
import { beforeEach } from "node:test";
import { CartProvider, CartState } from "@/store";
import { act } from "react";

describe('<ProductCard/>', () => {

  const product = mockProducts[3]

  test('Shoud render ProductCard correctly', () => {
    render(<ProductCard
      product={product}>
      <ProductCard.Image />
      <ProductCard.FavoriteButton />
      <ProductCard.Title />
      <ProductCard.Rating />
      <ProductCard.Badges />
      <ProductCard.Price />
    </ProductCard>)
    const priceRegex = new RegExp(product.price.toString(), 'i')
    expect(screen.getByText(product.title)).toBeDefined()
    expect(screen.getByText(priceRegex)).toBeDefined()
    expect(screen.getByText(/^Add to cart$/)).toBeDefined()
  })

  test('Should add product to cart on add to cart button', () => {

    render(
      <CartProvider>
        <ProductCard
          product={mockProducts[1]}>
          <ProductCard.Image />
          <ProductCard.FavoriteButton />
          <ProductCard.Title />
          <ProductCard.Rating />
          <ProductCard.Badges />
          <ProductCard.Price />
        </ProductCard>
      </CartProvider>)

    const addToCartElement = screen.getByText(/^Add to cart$/)
    act(() => {
      fireEvent.click(addToCartElement)
    })

    expect(screen.getByText(/^Remove from cart$/)).toBeDefined()
    const counterElement = screen.getByTestId('counter-input') as HTMLInputElement
    expect(Number(counterElement.value)).toBeGreaterThan(0)
  })

  test('Should remove product from cart on Remove from cart button', () => {
    const cartInitialState: CartState = {
      addProduct: () => { },
      removeProduct: () => { },
      clearCart: () => { },
      addProductQuantity: () => { },
      totalItems: 0,
      getProductById: () => undefined,
      products: mockCartProducts, // id => 1
      savings: 2
    }
    render(
      <CartProvider store={cartInitialState}>
        <ProductCard
          // id => 1
          product={mockProducts[0]}>
          <ProductCard.Image />
          <ProductCard.FavoriteButton />
          <ProductCard.Title />
          <ProductCard.Rating />
          <ProductCard.Badges />
          <ProductCard.Price />
        </ProductCard>
      </CartProvider>)

    const removeFromCartButton = screen.getByText(/^Remove from cart$/)
    expect(removeFromCartButton).toBeDefined()
    fireEvent.click(removeFromCartButton)

    expect(screen.getByText(/^Add to cart$/)).toBeDefined()
  })

})