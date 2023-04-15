import { z } from "zod"

export const userStatsInfo = z.object({
  id: z.number(),
  title: z.string(),
  acessos: z.string()
})

export const usersStats = z.array(userStatsInfo)

export type UsersStats = z.infer<typeof usersStats>
export type UserStatsInfo = z.infer<typeof userStatsInfo>