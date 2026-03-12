import { MainChart } from "@/pages/main-chart/main-chart"
import type { JSX } from "react"

type TRoute = {
  path: string
  element: () => JSX.Element
} 

export const ROUTES: Array<TRoute> = [
  {
    path: '/',
    element: MainChart
  }
]
