import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useContextStore } from "contexts/useContextStore"

interface PrivateRouteProps {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const login = useContextStore((state) => state.login)

  return login
    ? <>{children}</>
    : <Navigate to={'/login'} />
}