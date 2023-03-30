import styled from "styled-components/macro"
import { Single } from "types/single"

export const PhotoCommentsForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: ${({ single }: Single) => single ? "1rem 0" : "1rem"};
`

export const CommentsArea = styled.textarea`
  display: block;
  width: 100%;
  padding: .5rem;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 1px solid #eee;
  border-radius: .2rem;
  background-color: #eee;
  transition: .2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`

export const CommentsAreaButton = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  &:focus svg path,
  &:hover svg path {
    fill: #fea;
    stroke: #fb1;
  }

  &:focus svg g,
  &:hover svg g {
    animation: latir .6s infinite;
  }

  @keyframes latir {
   from {
    opacity: 0;
   }

   to {
    opacity: 1;
   } 
  }
`