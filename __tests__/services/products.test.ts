import { getProductsByCategory } from "@/services";
import { describe } from "node:test";
import { expect, test } from "vitest";

describe('getProductsByCategory', () => {
  test('should return array of products', async () => {
    const categoryId = 1
    const products = await getProductsByCategory(categoryId)
    expect(products.length).toBeGreaterThan(0)
    expect(products[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      price: expect.any(Number),
      description: expect.any(String),
      images: expect.any(Array),
      creationAt: expect.any(String),
      updatedAt: expect.any(String),
      slug: expect.any(String),
      category: {
        id: expect.any(Number),
        name: expect.any(String),
        slug: expect.any(String),
        image: expect.any(String),
        creationAt: expect.any(String),
        updatedAt: expect.any(String),
      }
    })

  })
})
