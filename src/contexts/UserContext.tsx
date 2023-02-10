import { createContext, ReactNode, useState } from "react"
import { api } from "services/api"

interface Children {
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
  data: UserData | null
}

export const UserContext = createContext<ContextData | null>(null)

const setStorageToken = (token: string) => {
  window.localStorage.setItem('token', token)
}

const getStorageToken = () => {
  return window.localStorage.getItem('token')
}

export const UserContextProvider = ({ children }: Children) => {
  const [data, setData] = useState<UserData | null>(null)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}