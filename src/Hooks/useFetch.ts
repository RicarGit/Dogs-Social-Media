import { useState, useCallback } from "react"
import { PhotoInfo } from "types/photoInfo"

type JsonType = {
  code: string
  message: string
  data: {
    status: number
  }
}

export const useFetch = () => {
  const [data, setData] = useState<JsonType | PhotoInfo[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const request = useCallback(async (url: string, options: RequestInit) => {
    let response: Response | null = null
    let json: JsonType | null = null

    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()

      if (!response.ok) {
        throw new Error(json?.message)
      }

    } catch (error) {
      if (error instanceof Error) {
        json = null
        setError(error.message)
      }
    }

    setData(json)
    setLoading(false)

    return { response, json }
  }, [])


  return {
    data,
    loading,
    error,
    request
  }
}
