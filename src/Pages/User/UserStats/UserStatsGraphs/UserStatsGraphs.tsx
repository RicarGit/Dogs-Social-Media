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
        y: Number(acessos) | 1
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
          data={graph.length ? graph : undefined}
          innerRadius={70}
          padAngle={3}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          colorScale='warm'
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fb1',
              strokeWidth: 2.5,
              pointerEvents: 'none'
            },
            labels: {
              fontSize: 14,
              fill: '#fb1'
            }
          }}
        />
      </S.GraphContainer>

      <S.GraphContainer>
        <VictoryChart style={{ parent: { touchAction: 'initial' } }}>
          <VictoryBar
            data={graph.length ? graph : undefined}
            alignment='start'
            barWidth={25}
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