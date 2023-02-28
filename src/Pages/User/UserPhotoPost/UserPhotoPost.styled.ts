import styled from "styled-components/macro"

interface Preview {
  preview: string
}

export const UserPhotoPostSection = styled.section`

`

export const UserPhotoPostForm = styled.form`

`

export const InputFile = styled.input`

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