import { Routes, Route } from 'react-router-dom'
/* import { useAuth } from '../hooks/auth' */
import { Home } from '../pages/Home'
import { DishInfo } from '../pages/DishInfo'

export function AppRoutes() {
  /*   const { user } = useAuth()
  const isAdmin = user && user.isAdmin === 1 */

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<DishInfo />} />
    </Routes>
  )
}
