import type { ShoppingCartStoreInterface } from 'src/types'

export const handleSumShoppingCartStore = ({
  shoppingCartStore,
  id,
}: {
  shoppingCartStore: ShoppingCartStoreInterface[]
  id: string
}) => {
  return shoppingCartStore.map((item: ShoppingCartStoreInterface) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 }
    }

    return item
  })
}
