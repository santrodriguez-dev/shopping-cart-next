import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MyCartNavBarButton } from '@/components';
import { CartProvider } from '@/store';

describe("MyCartNavBarButton", () => {

  test("should render link button", () => {
    render(<MyCartNavBarButton />)
    expect(screen.getByText('My Cart')).toBeDefined()
  });

  test('', () => {
    render(
      <CartProvider>
        <MyCartNavBarButton />
      </CartProvider>
    )
  })

})