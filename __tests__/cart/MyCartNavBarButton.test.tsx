import { expect, test, describe } from 'vitest'
import { getByTestId, render, screen } from '@testing-library/react'
import { MyCartNavBarButton } from '@/components';
import { CartProvider, CartState } from '@/store';
import { mockCartProducts } from '../mocks/products';
import { getTotalProducts } from '@/utils/cart';

describe("<MyCartNavBarButton/>", () => {

  test("should render MyCartNavBarButton correctly", () => {
    render(<MyCartNavBarButton />)
    expect(screen.getByText('My Cart')).toBeDefined()
  });

  test('Should render quantity of mockProdcutsCart correctly', () => {

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
    render(
      <CartProvider store={cartInitialState}>
        <MyCartNavBarButton />
      </CartProvider>
    )

    const cartQuantityElement = screen.getByTestId("cart-quantity")
    expect(Number(cartQuantityElement.innerHTML)).toBe(getTotalProducts(mockCartProducts))
  })

})