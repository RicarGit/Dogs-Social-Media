import { z } from 'zod'

const photoInfo = z.object({
  acessos: z.string(),
  author: z.string(),
  date: z.string(),
  id: z.number(),
  idade: z.string(),
  peso: z.string(),
  src: z.string(),
  title: z.string(),
  total_comments: z.string()
})

const photoData = z.object({
  photo: photoInfo
})

export type PhotoInfo = z.infer<typeof photoInfo>
export type PhotoData = z.infer<typeof photoData>