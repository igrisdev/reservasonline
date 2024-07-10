import { atom } from 'nanostores'

import SalchipapaSencilla from '@assets/imagesSalchipapas/salchipapa-original.webp'
import HamburguesaSencilla from '@assets/imagesHamburguesas/hamburguesa-sencilla.webp'

export const $isOpen = atom(false)

interface ListaEspecialidades {
  id: string
  name: string
  href: string
}

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

export const $listaEspecialidades = atom<ListaEspecialidades[]>([
  {
    id: 'salchipapas',
    name: 'Salchipapas',
    href: 'especialidad-salchipapas',
  },
  {
    id: 'hamburguesas',
    name: 'Hamburguesas',
    href: 'especialidad-hamburguesas',
  },
  {
    id: 'perros-calientes',
    name: 'Perros Calientes',
    href: 'especialidad-perros-calientes',
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    href: 'especialidad-sandwiches',
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    href: 'especialidad-bebidas',
  },
])

export function addListaEspecialidades(listaEspecialidad: ListaEspecialidades) {
  $listaEspecialidades.set([...$listaEspecialidades.get(), listaEspecialidad])
}

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
        name: 'Salchipapa Sencilla',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image: SalchipapaSencilla.src,
        price: '34.000',
      },
    ],
  },
  {
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
  },
])
