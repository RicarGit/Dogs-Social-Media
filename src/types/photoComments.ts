import { z } from 'zod'
import { photoInfo } from './photoInfo'

const photoCommentsType = z.array(z.object({
  user_id: z.string(),
  comment_ID: z.string(),
  comment_post_ID: z.string(),
  comment_author: z.string(),
  comment_content: z.string(),
  comment_date: z.string(),
}))

const photoCommentsData = z.object({
  comments: photoCommentsType,
  photo: photoInfo
})

const commentsData = z.object({
  commentsData: photoCommentsData
})

export type PhotoCommentsType = z.infer<typeof photoCommentsType>
export type PhotoCommentsData = z.infer<typeof photoCommentsData>
export type CommentsData = z.infer<typeof commentsData>