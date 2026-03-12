import { ROUTES } from "@/components/app/constants"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  
  return (
    <Routes>
      {ROUTES.map(route => 
        <Route key={route.path} path={route.path} element={<route.element />} />       
      )}
    </Routes>
  )
}
