import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserContext } from "contexts/UserContext"

interface PrivateRouteProps {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { login } = useUserContext()
  return login ? <>{children}</> : <Navigate to={'/login'} />
}