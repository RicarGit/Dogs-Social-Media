import styled from "styled-components/macro"

export const PhotoDelete = styled.button`
  background-color: #ddd;
  padding: .3rem .6rem;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: .4rem;
  font-size: .875rem;
  font-family: var(--type-first);
  cursor: pointer;
  transition: .1s;

  &:focus,
  &:hover {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`