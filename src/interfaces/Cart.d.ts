import { ProductItem } from './Product.d'

interface ProductCartItem extends ProductItem {
  quantity: number
}

export { ProductCartItem }