import { Product } from './menuData'

export interface CartItem {
  product: Product
  quantity: number
}

export const cartData: CartItem[] = []
