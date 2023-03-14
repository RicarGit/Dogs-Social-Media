import { z } from 'zod'
import { useState, useCallback } from "react"
import { PhotoInfo } from "types/photoInfo"
import { PhotoCommentsData } from 'types/photoComments'

const jsonType = z.object({
  code: z.string(),
  message: z.string(),
  data: z.object({
    status: z.number()
  })
})

type JsonType = z.infer<typeof jsonType>

export const useFetch = () => {
  const [data, setData] = useState<JsonType | PhotoInfo[] | PhotoCommentsData | null>(null)
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
