import { lazy, useEffect, Suspense } from "react"

import { api } from "services/api"
import { useFetch } from "hooks"
import { usersStats } from "types"
import { getStorageToken } from "helpers/getStoregeToken"

import { ErrorInfo, Head, Loading } from "Components"
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs/UserStatsGraphs'))

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
    <Suspense fallback={<Loading />}>
      <Head title='Estatísticas' />
      <UserStatsGraphs data={usersStats.parse(data)} />
    </Suspense>
  )
}
