import { atom } from 'nanostores'
import type { ListSpecialtiesInterface } from 'src/types'

export const $listSpecialties = atom<ListSpecialtiesInterface[]>([
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

export function addListSpecialties(
  listaEspecialidad: ListSpecialtiesInterface
) {
  $listSpecialties.set([...$listSpecialties.get(), listaEspecialidad])
}
