import ShoppingCartPage from "@/app/shopping-cart/page";
import { CartProvider, CartState } from "@/store";
import { getByRole, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { mockCartProducts } from "../mocks/products";

describe('<ShoppingCartPage/>', () => {

  const cartInitialState: CartState = {
    addProduct: () => { },
    removeProduct: () => { },
    clearCart: () => { },
    addProductQuantity: () => { },
    totalItems: 0,
    getProductById: () => undefined,
    products: mockCartProducts,
    savings: 2
  }

  test('Should render correctly', () => {
    render(
      <CartProvider store={cartInitialState}>
        <ShoppingCartPage />
      </CartProvider>
    )

    expect(screen.getByText(mockCartProducts[0].title)).toBeDefined()
    const linkElements = screen.getAllByRole('link', { name: mockCartProducts[0].title }) as HTMLLinkElement[]
    expect(linkElements[0].href).toContain(`product/${mockCartProducts[0].id}`)
    expect(screen.getAllByText(`$${mockCartProducts[0].price * mockCartProducts[0].quantity}`)).toBeDefined()
  })

})