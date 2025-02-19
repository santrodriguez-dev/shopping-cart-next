import { ProductCartItem } from "@/interfaces/Cart";
import { ProductItem } from "@/interfaces/Product";

type CartState = {
  products: ProductCartItem[]
  savings: number
}

const cartInitialState: CartState = {
  products: [],
  savings: 0
}

enum CartActionsTypesEnum {
  ADD_PRODUCT = 'ADD_PRODUCT',
  ADD_PRODUCT_QUANTITY = 'ADD_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
  CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY',
}


interface AddProductAction {
  type: CartActionsTypesEnum.ADD_PRODUCT
  payload: ProductItem
}

interface RemoveProductAction {
  type: CartActionsTypesEnum.REMOVE_PRODUCT
  payload: number // id to remove
}

interface ClearCartAction {
  type: CartActionsTypesEnum.CLEAR_CART
  payload: null
}

interface AddProductQuantityAction {
  type: CartActionsTypesEnum.ADD_PRODUCT_QUANTITY
  payload: { quantityToAdd: number, productId: number }
}

type CartActions = AddProductAction | RemoveProductAction | ClearCartAction | AddProductQuantityAction

function cartReducer(state: CartState, action: CartActions): CartState {
  const { type, payload } = action;

  switch (type) {
    case CartActionsTypesEnum.ADD_PRODUCT: {
      const productIdx = state.products.findIndex(product => product.id === payload.id)
      if (productIdx > -1) {
        const originalProduct = state.products.at(productIdx)!
        const newQuantity = originalProduct.quantity += 1
        const resultProducts = state.products.with(productIdx, { ...originalProduct, quantity: newQuantity })
        return {
          ...state,
          products: resultProducts
        }
      }
      return {
        ...state,
        products: [...state.products, { ...payload, quantity: 1 }]
      }
    }

    case CartActionsTypesEnum.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== payload)
      }

    case CartActionsTypesEnum.ADD_PRODUCT_QUANTITY:
      const { quantityToAdd, productId } = payload
      if (!quantityToAdd || quantityToAdd === 0) return state
      const productIdx = state.products.findIndex(p => p.id === productId)
      if (productIdx < 0) return state

      const originalProduct = state.products.at(productIdx)!

      const newQuantity = originalProduct.quantity + quantityToAdd

      if (newQuantity <= 0) {
        return {
          ...state,
          products: state.products.filter(p => p.id !== payload.productId)
        }
      }

      const resultProducts = state.products.with(productIdx, { ...originalProduct, quantity: newQuantity })
      return {
        ...state,
        products: resultProducts
      }

    case CartActionsTypesEnum.CLEAR_CART:
      return {
        ...state,
        products: []
      }
    default:
      return state;
  }
}

export { cartInitialState, cartReducer, CartActionsTypesEnum }