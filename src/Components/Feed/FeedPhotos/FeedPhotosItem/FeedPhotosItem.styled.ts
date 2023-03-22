import styled from "styled-components/macro"
import views from 'assets/visualizacao.svg'

export const FeedPhotosItem = styled.li`
  display: grid;
  border-radius: .2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  &:hover span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    grid-area: 1/1;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`

export const PhotoViews = styled.span`
  grid-area: 1/1;
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
  font-size: 1rem;
  display: none;

  &::before {
    content: '';
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: .25rem;
    margin-top: .2rem;
    background: url(${views}) no-repeat;
  }
`