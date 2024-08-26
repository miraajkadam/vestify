import { AddProjectApiPayload } from '@customTypes/ProjectTypes'
import { addProjectToDb } from '@dtos/project.dto'
import { ApiResponse } from '@models/ApiResponse'
import { type Request, type Response } from 'express'

export const addNewProject = (
  req: Request<null, null, AddProjectApiPayload, null>,
  res: Response<null>
) => {
  const project = {
    Allocation: 'sakmd',
    Category: 'samdksa',
    Description: 'KSADSA',
    FDV: 'SKDMLAMD',
    Name: 'KSDMSALK',
    Price: '21321',
    Round: 'A',
    TGE: new Date(),
    TgeUnlock: 'Yes',
    Vesting: new Date(),
  }

  const asd = addProjectToDb(project)

  console.log(asd)

  return res.status(200).send(null)
}
