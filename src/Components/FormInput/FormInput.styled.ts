import styled from "styled-components/macro"

export const InputContainer = styled.div`
  margin-bottom: 1rem;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid #eee;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: .4rem;
  background-color: #eee;
  transition: .2s;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  margin-bottom: .5rem;
`

export const ErrorMessage = styled.p`
  color: #f31;
  font-size: .875rem;
  margin-top: .25rem;
`