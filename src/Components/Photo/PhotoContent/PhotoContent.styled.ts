import styled, { css } from "styled-components/macro"
import views from 'assets/visualizacao-black.svg'
import { Single } from 'types/single'

export const PhotoContent = styled.div`
  ${({ single }: Single) => css`
    height: ${single ? "auto" : "36rem"};
    border-radius: ${single ? ".2rem" : ".4rem"};
    margin-bottom: 30px;
    background-color: #fff;
    display: grid;
    grid-template-columns: ${single ? "1fr" : "36rem 20rem"};
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(.8);
    animation: scaleUp .3s forwards;

    @keyframes scaleUp {
      to {
        opacity: initial;
        transform: initial;
      }
    }

    @media (max-width: 64rem) {
      display: block;
      height: auto;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
    }
  `}
`

export const Details = styled.div`
  padding: ${({ single }: Single) => single ? "1rem 0 0 0" : "2rem 2rem 0 2rem"};

  @media (max-width: 500px) {
    padding: ${({ single }: Single) => single ? "1rem 0 0 0" : "1rem 1rem 0 1rem"};
  }
`

export const Author = styled.p`
  opacity: .5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    text-decoration: underline;
  }
`

export const Views = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: .5rem;
    background: url(${views});
  }
`

export const AttributesList = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
`

export const Attribute = styled.li`
  margin-right: 2rem;

  &::before {
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: .5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background-color: #333;
    margin-top: 5px;
  }
`