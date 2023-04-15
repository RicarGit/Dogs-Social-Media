import { z } from "zod"
import { photoInfo, commentType, photoCommentsData, userStatsInfo, jsonType } from 'types'

const dataTypes = z
  .union([jsonType, photoInfo, commentType, photoCommentsData, userStatsInfo])

export type DataTypes = z.infer<typeof dataTypes>