import { atom } from 'nanostores'

import SalchipapaSencilla from '@assets/imagesSalchipapas/salchipapa-original.webp'
import HamburguesaSencilla from '@assets/imagesHamburguesas/hamburguesa-sencilla.webp'

/* interface Product {
  id: number
  name: string
  description: string
  image: string
  price: string
}

interface Specialty {
  [key: string]: Product[]
}

interface Specialties {
  [index: number]: Specialty
} */

export const $specialties = atom([
  {
    salchipapas: [
      {
        id: 1,
        name: 'Salchipapa Sencilla',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: SalchipapaSencilla.src,
        price: '6.000 ',
      },
      {
        id: 2,
        name: 'Salchipapa Grande',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: SalchipapaSencilla.src,
        price: '34.000',
      },
      {
        id: 3,
        name: 'Salchipapa Extra Grande',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: SalchipapaSencilla.src,
        price: '60.000',
      },
    ],
    hamburguesas: [
      {
        id: 1,
        name: 'Hamburguesa Sencilla',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: HamburguesaSencilla.src,
        price: '6.000',
      },
      {
        id: 2,
        name: 'Hamburguesa Grande',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: HamburguesaSencilla.src,
        price: '34.000',
      },
    ],
    sandwiches: [
      {
        id: 1,
        name: 'Sandwich Pequeño',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: HamburguesaSencilla.src,
        price: '24.000',
      },
      {
        id: 2,
        name: 'Sandwich Grande',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: HamburguesaSencilla.src,
        price: '24.000',
      },
    ],
  },
])
