import { createContext, ReactNode, useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "services/api"

interface UserContextProviderProps {
  children: ReactNode
}

interface UserData {
  id: string
  username: string
  nome: string
  email: string
}

interface ContextData {
  userLogin: (username: string, password: string) => Promise<void>
  userLogout: () => void
  data: UserData | null
  login: boolean
  loading: boolean
  error: string | null
}

export const UserContext = createContext<ContextData | null>(null)

const setStorageToken = (token: string) => {
  window.localStorage.setItem('token', token)
}

export const getStorageToken = () => {
  return window.localStorage.getItem('token')
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [data, setData] = useState<UserData | null>(null)
  const [login, setLogin] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const userLogout = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  useEffect(() => {
    const autoLogin = async () => {
      const token = getStorageToken()

      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = api.TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)

          if (!response.ok) {
            throw new Error('Token inválido.')
          }

          getUserData(token)
          setLoading(false)
        } catch (error) {
          userLogout()
        }
      } else {
        setLogin(false)
      }
    }

    autoLogin()
  }, [userLogout])

  const getUserData = async (token: string) => {
    const { url, options } = api.USER_GET(token)
    const response = await fetch(url, options)
    const userData: UserData = await response.json()

    setData(userData)
    setLogin(true)
    console.log(userData)
  }

  const userLogin = async (username: string, password: string) => {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = api.TOKEN_POST({ username: username, password: password })
      const tokenResponse = await fetch(url, options)

      if (!tokenResponse.ok) {
        throw new Error(`Error: ${tokenResponse.statusText}`)
      }

      const { token } = await tokenResponse.json()
      setStorageToken(token)
      getUserData(token)
      navigate('/conta')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        setLogin(false)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider value={{
      userLogin,
      userLogout,
      data,
      login,
      loading,
      error
    }}>
      {children}
    </UserContext.Provider>
  )
}