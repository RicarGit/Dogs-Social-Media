import styled from "styled-components/macro"

interface Preview {
  preview: string
}

export const UserPhotoPostSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const UserPhotoPostForm = styled.form`
  
`

export const InputFile = styled.input`
  margin-bottom: 1rem;
`

export const ImagePreview = styled.img<Preview>`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: url(${({ preview }) => preview});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`