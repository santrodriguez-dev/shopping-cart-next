import { ProductItem } from './Product.d'

interface ProductCartItem {
  id: number
  quantity: number
  title: string
  price: number
  image?: string
  description: string
}

export { ProductCartItem }