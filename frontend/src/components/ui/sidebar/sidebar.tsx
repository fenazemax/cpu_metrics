import { ROUTES } from '@/app/constants'
import { Link } from 'react-router'
import cl from './sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={cl.navigationContainer}>
      {ROUTES.map((route) => (
        <Link to={route.path} key={route.path}>
          {route.title}
        </Link>
      ))}
    </aside>
  )
}
