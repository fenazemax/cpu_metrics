import { CpuData, GpuData, MainChart, MemoryData } from '@/pages'
import type { JSX } from 'react'

type TRoute = {
  path: string
  element: () => JSX.Element
  title: string
}

export const ROUTES: Array<TRoute> = [
  {
    path: '/',
    element: MainChart,
    title: 'Главная',
  },
  {
    path: '/cpu',
    element: CpuData,
    title: 'CPU',
  },
  {
    path: '/gpu',
    element: GpuData,
    title: 'GPU',
  },
  {
    path: '/memory',
    element: MemoryData,
    title: 'RAM memory',
  },
]
