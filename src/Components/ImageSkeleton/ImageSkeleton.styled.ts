import styled from "styled-components/macro"

export const ImageSkeletonWrapper = styled.div`
  display: grid;
`

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }

    to {
      background-position: -200%;
    }
  }
`

export const LoadedImage = styled.img`
  grid-area: 1/1;
  display: block;
  max-width: 100%;
  opacity: 0;
  transition: .2s;
`