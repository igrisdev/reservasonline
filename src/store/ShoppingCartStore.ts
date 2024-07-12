import { atom } from 'nanostores'

interface ShoppingCartStore {
  id: number
  quantity: number
  name: string
  ingredients: string
  price: string
}

export const $shoppingCartStore = atom<ShoppingCartStore[]>([])

export function addShoppingCartStore(shoppingCartStore: ShoppingCartStore) {
  $shoppingCartStore.set([...$shoppingCartStore.get(), shoppingCartStore])
}
