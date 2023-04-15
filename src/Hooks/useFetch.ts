import { useState, useCallback } from "react"
import { DataTypes } from 'types'

export const useFetch = () => {
  const [data, setData] = useState<DataTypes | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const request = useCallback(async (url: string, options: RequestInit) => {
    let response: Response | null = null
    let json: DataTypes | null = null

    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()

      if (!response.ok && json && 'message' in json) {
        throw new Error(json.message)
      }

      setData(json)
      setLoading(false)
    } catch (error) {
      if (error instanceof Error) {
        json = null
        setError(error.message)
      }
    }

    return { response, json }
  }, [])

  return {
    data,
    loading,
    error,
    request
  }
}
