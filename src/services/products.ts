import { ProductItem } from "@/interfaces/Product"

const PLATZI_API_URL = 'https://api.escuelajs.co/api/v1/products'

export const getAllProducts = async (offset: number = 0, limit: number = 10): Promise<ProductItem[]> => {
  const response = await fetch(`${PLATZI_API_URL}?offset=${offset}&limit=${limit}`)
  if (!response.ok) throw new Error('getProducts Error')
  return await response.json()
}

export const getProductById = (id: string) => {
  return fetch(`${PLATZI_API_URL}/${id}`)
    .then(response => {
      if (!response.ok) throw new Error('getProductById Error')
      return response.json()
    })
}
