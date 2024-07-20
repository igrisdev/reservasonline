import { $specialties } from '@store/SpecialtiesStore'
import { addShoppingCartStore } from '@store/ShoppingCartStore'
import { useStore } from '@nanostores/react'

export const CartSpecialties = ({
  id,
  nameSpecialty,
  image,
  name,
  description,
  price,
}) => {
  const specialties = useStore($specialties)
  const specialty = Object.keys(nameSpecialty).toString()

  const handleAddToCart = () => {
    addShoppingCartStore({
      id: 1,
      quantity: 1,
      name: 'Salchipapas',
      ingredients: 'Lorem ipsum dolor sit eli',
      price: '$6.000',
    })
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
          data-identifier={specialty + '-' + id}
          onClick={handleAddToCart}
          className='bg-local_background_quaternary/30 font-bold text-2xl rounded-full size-8 text-center text-local_name_secondary button-add-to-cart'
        >
          +
        </button>
      </div>
    </article>
  )
}
