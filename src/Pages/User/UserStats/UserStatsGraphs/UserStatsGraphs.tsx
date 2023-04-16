import * as S from './UserStatsGraphs.styled'
import { useEffect, useState } from "react"
import { UsersStats } from 'types'

import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

export interface UserGraphsInfo {
  data: UsersStats
}

interface GraphData {
  x: string
  y: number
}

const UserStatsGraphs = ({ data }: UserGraphsInfo) => {
  const [graph, setGraph] = useState<GraphData[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const accesses = data.map(({ acessos }) => Number(acessos))
    const totalOfAccesses = accesses.reduce((acc, access) => acc + access, 0)

    const graphData = data.map(({ title, acessos }) => (
      {
        x: title,
        y: Number(acessos)
      }
    ))

    setTotal(totalOfAccesses)
    setGraph(graphData)
  }, [data])

  return (
    <S.UserStatsGraphs className='animeLeft'>
      <S.GraphContainer className='accesses'>
        <p>Acessos: {total}</p>
      </S.GraphContainer>

      <S.GraphContainer>
        <VictoryPie
          data={graph}
          innerRadius={70}
          padAngle={3}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fb1',
              strokeWidth: 2.5
            },
            labels: {
              fontSize: 14,
              fill: '#fb1'
            }
          }}
        />
      </S.GraphContainer>

      <S.GraphContainer>
        <VictoryChart>
          <VictoryBar
            data={graph}
            alignment='start'
            style={{
              data: {
                fill: '#fb1'
              }
            }}
          />
        </VictoryChart>
      </S.GraphContainer>
    </S.UserStatsGraphs>
  )
}

export default UserStatsGraphs