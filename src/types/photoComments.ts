import { z } from 'zod'
import { photoInfo } from './photoInfo'

const commentType = z.object({
  user_id: z.string(),
  comment_ID: z.string(),
  comment_post_ID: z.string(),
  comment_author: z.string(),
  comment_content: z.string(),
  comment_date: z.string(),
})

const photoCommentsData = z.object({
  comments: z.array(commentType),
  photo: photoInfo
})

const commentsData = z.object({
  commentsData: photoCommentsData
})

export type CommentType = z.infer<typeof commentType>
export type PhotoCommentsData = z.infer<typeof photoCommentsData>
export type CommentsData = z.infer<typeof commentsData>