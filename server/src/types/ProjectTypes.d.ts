import type { ProjectTokenMetrics, Projects } from '@prisma/client'

export type AddProjectApiPayload = Omit<Projects, 'Id'> &
  Omit<ProjectTokenMetrics, 'Id', 'ProjectId'>
