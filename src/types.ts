export interface CartSpecialtiesInterface {
  id: number
  nameSpecialty: any
  image: string
  name: string
  description: string
  price: string
}

export interface ShoppingCartStoreInterface {
  id: string
  quantity: number
  name: string
  ingredients: string
  price: string
}

export interface ListSpecialtiesInterface {
  id: string
  name: string
  href: string
}