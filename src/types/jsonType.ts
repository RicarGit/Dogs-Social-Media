import { z } from "zod"

export const jsonType = z.object({
  code: z.string(),
  message: z.string(),
  data: z.object({
    status: z.number()
  })
})