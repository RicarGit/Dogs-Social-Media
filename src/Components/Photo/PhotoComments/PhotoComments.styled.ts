import styled from "styled-components/macro"
import { Single } from "types/single"

export const PhotoComments = styled.ul`
  overflow-y: auto;
  word-break: break-all;
  padding: ${({ single }: Single) => single ? "0" : "0 2rem"};
`

export const PhotoComment = styled.li`
  margin-bottom: .5rem;
  line-height: 1.2;
`

export const CommentAuthor = styled.b`

`

export const CommentContent = styled.span`

`