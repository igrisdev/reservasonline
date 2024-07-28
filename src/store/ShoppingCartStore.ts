import { atom } from 'nanostores'
import type { ShoppingCartStoreInterface } from 'src/types'

export const $shoppingCartStore = atom<ShoppingCartStoreInterface[]>([])

export function addShoppingCartStore(
  shoppingCartStore: ShoppingCartStoreInterface
) {
  $shoppingCartStore.set([...$shoppingCartStore.get(), shoppingCartStore])
}

export function sumShoppingCartStore(
  shoppingCartStore: ShoppingCartStoreInterface[]
) {
  $shoppingCartStore.set(shoppingCartStore)
}
