import { getStorageToken } from "helpers/getStoregeToken"
import { api } from "services/api"
import { create } from "zustand"

interface UserData {
  id: string
  username: string
  nome: string
  email: string
}

interface ContextProps {
  data: UserData | null
  login: boolean
  loading: boolean
  error: string | null
}

interface ContextActions {
  userLogin: (username: string, password: string) => Promise<void>
  userLogout: () => void
  getUserData: (token: string) => Promise<void>
  autoLogin: () => Promise<void>
}

export const useContextStore = create<ContextProps & ContextActions>((set, get) => ({
  data: null,
  login: false,
  loading: false,
  error: null,

  userLogout: () => {
    set(() => ({
      data: null,
      login: false,
      loading: false,
      error: null
    }))

    window.localStorage.removeItem('token')
  },

  getUserData: async (token: string) => {
    try {
      const { url, options } = api.USER_GET(token)
      const response = await fetch(url, options)
      const userData: UserData = await response.json()

      set({ data: userData, login: true, error: null })
    } catch (error) {
      if (error instanceof Error) {
        set({ data: null, login: false, error: error.message })
      }
    }
  },

  userLogin: async (username: string, password: string) => {
    try {
      set({ error: null, loading: true })
      const { url, options } = api.TOKEN_POST({ username, password })
      const tokenResponse = await fetch(url, options)

      if (!tokenResponse.ok) {
        throw new Error(`Error: ${tokenResponse.statusText}`)
      }

      const { token } = await tokenResponse.json()
      window.localStorage.setItem('token', token)
      await get().getUserData(token)
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, login: false })
      }
    } finally {
      set({ loading: false })
    }
  },

  autoLogin: async () => {
    const token = getStorageToken()

    if (token) {
      try {
        set({ error: null, loading: true })
        const { url, options } = api.TOKEN_VALIDATE_POST(token)
        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error('Token inválido.')
        }

        get().getUserData(token)
        set({ loading: false })
      } catch (error) {
        get().userLogout()
      }
    } else {
      set({ login: false })
    }
  },
}))