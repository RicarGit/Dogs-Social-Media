import { ReactNode } from 'react'
import { useUserContext } from "contexts/UserContext"
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { login } = useUserContext()
  return login ? <>{children}</> : <Navigate to={'/login'} />
}
