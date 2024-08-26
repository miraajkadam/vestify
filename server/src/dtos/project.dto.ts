import { AddProjectApiPayload } from '@customTypes/ProjectTypes'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const addProjectToDb = async (something: AddProjectApiPayload) => {
  const project = await prisma.projects.create({
    data: {
      Name: something.Name,
      Category: something.Category,
      Description: something.Description,
      Round: something.Round,
      ProjectTokenMetrics: {
        create: {
          Allocation: something.Allocation,
          FDV: something.FDV,
          Price: something.Price,
          TgeUnlock: something.TgeUnlock,
          TGE: something.TGE,
          Vesting: something.Vesting,
        },
      },
    },
  })

  console.log(project)

  return project
}
