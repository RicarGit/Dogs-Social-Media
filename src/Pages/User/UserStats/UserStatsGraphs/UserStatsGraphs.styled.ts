import styled from "styled-components/macro"

export const UserStatsGraphs = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  .accesses {
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
`

export const GraphContainer = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
  border-radius: .2rem;
  display: grid;
  align-items: center;

  @media (max-width: 40rem) {
    grid-column: 1/3;
  }
`