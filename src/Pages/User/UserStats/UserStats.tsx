import { useEffect } from "react"

import { api } from "services/api"
import { useFetch } from "hooks"
import { getStorageToken } from "contexts/UserContext"

import { ErrorInfo, Head, Loading } from "Components"
import { UserStatsGraphs } from "./UserStatsGraphs"
import { usersStats } from "types"

export const UserStats = () => {
  const { data, error, loading, request } = useFetch()
  const token = getStorageToken()

  useEffect(() => {
    const getData = async () => {
      if (token) {
        const { url, options } = api.STATS_GET(token)
        await request(url, options)
      }
    }

    getData()
  }, [request, token])

  if (loading) return <Loading />
  if (error) return <ErrorInfo error={error} />
  if (!data) return null

  return (
    <div>
      <Head title='Estatísticas' />
      <UserStatsGraphs data={usersStats.parse(data)} />
    </div>
  )
}
