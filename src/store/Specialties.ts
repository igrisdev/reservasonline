import { atom } from 'nanostores'

export const $isOpen = atom(false)

interface ListaEspecialidades {
  id: string
  name: string
  href: string
}

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
