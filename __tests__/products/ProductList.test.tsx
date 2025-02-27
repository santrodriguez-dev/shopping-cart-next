import { ProductList } from "@/components";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { mockProducts } from "../mocks/products";

describe('<ProductList/>', () => {

  test('Shoud render a list of products', () => {
    render(<ProductList products={mockProducts} />)
    const productElements = screen.getAllByTestId('product-test')
    expect(productElements.length).toBe(mockProducts.length)
  })
})