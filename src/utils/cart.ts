import { ProductCartItem } from "@/interfaces/Cart";

export const getTotalProducts = (products: ProductCartItem[]) => products.reduce((acc, product) => acc + product.quantity, 0)