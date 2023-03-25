import { z } from 'zod'
import { useState, useCallback } from "react"
import { PhotoInfo } from "types/photoInfo"
import { CommentType, PhotoCommentsData } from 'types/photoComments'

const jsonType = z.object({
  code: z.string(),
  message: z.string(),
  data: z.object({
    status: z.number()
  })
})

type JsonType = z.infer<typeof jsonType>
type DataTypes = JsonType | CommentType | PhotoInfo[] | PhotoCommentsData

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
