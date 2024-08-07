import type { CartSpecialtiesInterface } from 'src/types'

import { useStore } from '@nanostores/react'
import { $specialties } from '@store/SpecialtiesStore'
import {
  $shoppingCartStore,
  addShoppingCartStore,
  updateShoppingCartStore,
} from '@store/ShoppingCartStore'
import { sumSpecialtyShoppingCartStore } from '@lib/functions'

export const CartSpecialties = ({
  id,
  nameSpecialty,
  image,
  name,
  description,
  price,
}: CartSpecialtiesInterface) => {
  const specialties = useStore($specialties)
  const shoppingCartStore = useStore($shoppingCartStore)

  const handleAddToCart = ({
    nameSpecialty,
    id,
  }: {
    nameSpecialty: string
    id: number
  }) => {
    const isAlreadyInCart = shoppingCartStore.find(
      ({ id: cartId }) => cartId === nameSpecialty + '-' + id
    )

    if (isAlreadyInCart) {
      const newQuantityBuyCart = sumSpecialtyShoppingCartStore({
        shoppingCartStore,
        id: nameSpecialty + '-' + id,
      })

      return updateShoppingCartStore(newQuantityBuyCart)
    }

    let foundListSpecialty: { [key: string]: any } | undefined

    foundListSpecialty = specialties.find((specialtyInfo) => {
      if (nameSpecialty in specialtyInfo) {
        return specialtyInfo
      }
    })

    if (!foundListSpecialty) return

    const found = foundListSpecialty[nameSpecialty].find(
      (item: any) => item.id === id
    )
    const { name, ingredients, price } = found

    const newShoppingCartStore = {
      id: nameSpecialty + '-' + id,
      quantity: 1,
      name,
      ingredients,
      price,
    }

    addShoppingCartStore(newShoppingCartStore)
  }

  return (
    <article className='border-2 border-local_border_primary p-4 rounded-lg'>
      <div className='flex gap-4'>
        <div>
          <div className='overflow-hidden rounded-md'>
            <img
              src={image}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='font-bold'>{name}</h3>

            <p className='text-sm'>{description}</p>
          </div>

          <div className='mt-4'>iconos</div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <span>$ {price}</span>
        <button
          onClick={() => handleAddToCart({ nameSpecialty, id })}
          className='bg-local_background_quaternary/30 font-bold text-2xl rounded-full size-8 text-center text-local_name_secondary button-add-to-cart'
        >
          +
        </button>
      </div>
    </article>
  )
}
