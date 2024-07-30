import type { ShoppingCartStoreInterface } from 'src/types'

export const sumSpecialtyShoppingCartStore = ({
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

export const resSpecialtyShoppingCartStore = ({
  shoppingCartStore,
  id,
}: {
  shoppingCartStore: ShoppingCartStoreInterface[]
  id: string
}) => {
  const isQuantityZero = shoppingCartStore.find(
    (item: ShoppingCartStoreInterface) => item.quantity === 1
  )

  if (isQuantityZero)
    return shoppingCartStore.filter(
      (item: ShoppingCartStoreInterface) => item.quantity > 1
    )

  return shoppingCartStore.map((item: ShoppingCartStoreInterface) => {
    if (item.id === id && item.quantity > 0) {
      return { ...item, quantity: item.quantity - 1 }
    }

    return item
  })
}
