import { $specialties } from '@store/SpecialtiesStore'
import { addShoppingCartStore } from '@store/ShoppingCartStore'
import { useStore } from '@nanostores/react'

interface CartSpecialties {
  id: number
  nameSpecialty: any
  image: string
  name: string
  description: string
  price: string
}

export const CartSpecialties = ({
  id,
  nameSpecialty,
  image,
  name,
  description,
  price,
}: CartSpecialties) => {
  const specialties = useStore($specialties)
  const specialtyName = Object.keys(nameSpecialty).toString()

  const handleAddToCart = ({
    specialtyName,
    id,
  }: {
    specialtyName: string
    id: number
  }) => {
    console.log(specialtyName, id)

    const foundListSpecialty = specialties.find((specialtyInfo) => {
      const isFound = Object.keys(specialtyInfo).includes(specialtyName)

      if (!isFound) return

      return specialtyInfo
    })

    const found = foundListSpecialty[specialtyName].find(
      (item) => item.id === id
    )

    const { id: idFound, name, ingredients, price } = found

    const newShoppingCartStore = {
      id: idFound,
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
          onClick={() => handleAddToCart({ specialtyName, id })}
          className='bg-local_background_quaternary/30 font-bold text-2xl rounded-full size-8 text-center text-local_name_secondary button-add-to-cart'
        >
          +
        </button>
      </div>
    </article>
  )
}
