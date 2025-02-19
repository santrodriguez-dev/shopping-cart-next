import { ProductItem } from "@/interfaces/Product";

type CartState = {
  products: ProductItem[]
}

const cartInitialState: CartState = {
  products: []
}

enum CartActionsTypesEnum {
  ADD_PRODUCT = 'ADD_PRODUCT',
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
  payload?: null
}

type CartActions = AddProductAction | RemoveProductAction | ClearCartAction

function cartReducer(state: CartState, action: CartActions): CartState {
  const { type, payload } = action;

  switch (type) {
    case CartActionsTypesEnum.ADD_PRODUCT:
      if (state.products.findIndex(product => product.id === payload.id) > -1) return state
      return {
        ...state,
        products: [...state.products, payload]
      }

    case CartActionsTypesEnum.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== payload)
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