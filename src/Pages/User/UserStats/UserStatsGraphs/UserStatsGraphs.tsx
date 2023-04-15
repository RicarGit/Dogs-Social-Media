import * as S from './UserStatsGraphs.styled'
import { useState } from "react"
import { UsersStats } from 'types'

interface UserGraphsInfo {
  data: UsersStats
}

export const UserStatsGraphs = ({ data }: UserGraphsInfo) => {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <S.UserStatsGraphs className='animeLeft'>
      <S.GraphsTotal>
        <p>Acessos: {total}</p>
      </S.GraphsTotal>
    </S.UserStatsGraphs>
  )
}
