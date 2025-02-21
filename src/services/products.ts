import { OFFSET, LIMIT, PLATZI_API_URL } from "@/constants"
import { ProductItem } from "@/interfaces/Product"


const getAllProducts = async (offset: number = OFFSET, limit: number = LIMIT): Promise<ProductItem[]> => {
  const response = await fetch(`${PLATZI_API_URL}/products?offset=${offset}&limit=${limit}`)
  if (!response.ok) throw new Error('getProducts Error')
  return await response.json()
}

const getProductsByCategory = async (categoryId: number, offset: number = 0, limit: number = 10): Promise<ProductItem[]> => {
  const response = await fetch(`${PLATZI_API_URL}/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`)
  if (!response.ok) throw new Error('getProducts Error')
  return await response.json()
}

const getProductById = (id: string): Promise<ProductItem> => {
  return fetch(`${PLATZI_API_URL}/products/${id}`)
    .then(response => {
      if (!response.ok) throw new Error('getProductById Error')
      return response.json()
    })
}



export { getAllProducts, getProductById, getProductsByCategory }