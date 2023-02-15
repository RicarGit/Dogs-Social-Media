import { ReactNode, useContext } from 'react'
import { UserContext } from "contexts/UserContext"
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const context = useContext(UserContext)

  return context?.login ? <>{children}</> : <Navigate to={'/login'} />
}
