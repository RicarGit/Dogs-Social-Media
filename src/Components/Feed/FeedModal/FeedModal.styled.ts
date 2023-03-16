import styled from "styled-components/macro"

export const FeedModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem calc(4rem - 15px) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 5px) 2rem 2rem;
  }
`