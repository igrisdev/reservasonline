import { atom } from 'nanostores'

interface ShoppingCartStore {
  id: number
  name: string
  description: string
  image: string
  price: string
}

export const $shoppingCartStore = atom<ShoppingCartStore[]>([])

export function addShoppingCartStore(shoppingCartStore: ShoppingCartStore) {
  $shoppingCartStore.set([...$shoppingCartStore.get(), shoppingCartStore])
}
