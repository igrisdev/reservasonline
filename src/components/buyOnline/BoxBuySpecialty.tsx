import '@styles/globals.css'

import { useStore } from '@nanostores/react'
import {
  $shoppingCartStore,
  updateShoppingCartStore,
} from '@store/ShoppingCartStore'

import { BigCartIcon } from '@assets/icons/BigCartIcon'
import {
  resSpecialtyShoppingCartStore,
  sumSpecialtyShoppingCartStore,
} from '@lib/functions'
import type { ShoppingCartStoreInterface } from 'src/types'

export const BoxBuySpecialty = () => {
  const shoppingCartStore = useStore($shoppingCartStore)
  const isCartEmpty = shoppingCartStore.length === 0

  const stylesIsCartEmpty = isCartEmpty ? '!justify-between !gap-0' : ''

  const handleClickButtonResSpecialty = ({
    shoppingCartStore,
    id,
  }: {
    shoppingCartStore: ShoppingCartStoreInterface[]
    id: string
  }) => {
    const newQuantityBuyCart = resSpecialtyShoppingCartStore({
      shoppingCartStore,
      id,
    })

    return updateShoppingCartStore(newQuantityBuyCart)
  }

  const handleClickButtonSumSpecialty = ({
    shoppingCartStore,
    id,
  }: {
    shoppingCartStore: ShoppingCartStoreInterface[]
    id: string
  }) => {
    const newQuantityBuyCart = sumSpecialtyShoppingCartStore({
      shoppingCartStore,
      id,
    })

    return updateShoppingCartStore(newQuantityBuyCart)
  }

  return (
    <div
      id='card-buy'
      className='h-full relative hidden lg:block'
    >
      <article
        className={
          'sticky top-0 bg-local_background_primary min-h-[450px] rounded-xl shadow-xl p-4 py-8 flex flex-col items-center justify-start gap-4 ' +
          stylesIsCartEmpty
        }
      >
        <h2 className='text-2xl font-bold'>Tu pedido</h2>

        {isCartEmpty ? (
          <>
            <div>
              <BigCartIcon />
            </div>
            <div className='text-center'>
              <small className='block'>
                Todavía no has añadido ningún producto. Cuando lo hagas <br />{' '}
                ¡veras los productos aquí!
              </small>
              <span className='block mt-4 text-sm font-bold'>
                El precio del envío corre por tu cuenta
              </span>
            </div>
          </>
        ) : (
          <div className='w-full flex flex-col gap-2'>
            {shoppingCartStore.map(
              ({ id, quantity, name, ingredients, price }) => (
                <article
                  className='cart-buy'
                  key={id}
                >
                  <div
                    style={{ gridArea: 'quantity' }}
                    className='text-center font-bold'
                  >
                    {quantity}x
                  </div>
                  <h3 style={{ gridArea: 'name' }}>{name}</h3>
                  <p
                    className='text-center'
                    style={{ gridArea: 'price' }}
                  >
                    ${price}
                  </p>

                  <div
                    className='flex items-center justify-center'
                    style={{ gridArea: 'iconPlus' }}
                  >
                    <button
                      onClick={() =>
                        handleClickButtonResSpecialty({ shoppingCartStore, id })
                      }
                      className='bg-local_background_quaternary/30 font-bold text-xl rounded-full size-7 text-center text-local_name_secondary'
                    >
                      -
                    </button>
                  </div>
                  <div
                    className=''
                    style={{ gridArea: 'ingredients' }}
                  >
                    <p className='text-[12px]'>{ingredients}</p>
                    <button className='text-sm text-local_title_secondary'>
                      editar
                    </button>
                  </div>
                  <div
                    className='flex items-center justify-center'
                    style={{ gridArea: 'iconLess' }}
                  >
                    <button
                      onClick={() =>
                        handleClickButtonSumSpecialty({ shoppingCartStore, id })
                      }
                      className='bg-local_background_quaternary/30 font-bold text-xl rounded-full size-7 text-center text-local_name_secondary'
                    >
                      +
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        )}
      </article>
    </div>
  )
}
