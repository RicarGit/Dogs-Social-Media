import * as S from './UserStatsGraphs.styled'
import { useState } from "react"

export const UserStatsGraphs = () => {
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
