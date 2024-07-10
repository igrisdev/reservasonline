import { atom } from 'nanostores'

interface ListSpecialties {
  id: string
  name: string
  href: string
}

export const $listSpecialties = atom<ListSpecialties[]>([
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

export function addListSpecialties(listaEspecialidad: ListSpecialties) {
  $listSpecialties.set([...$listSpecialties.get(), listaEspecialidad])
}
