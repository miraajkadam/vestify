import { type Request, type Response } from 'express'

import { AddProjectApiPayload } from '@customTypes/ProjectTypes'
import { addProjectToDb } from '@dtos/project.dto'
import { ApiResponse } from '@models/ApiResponse'
import { createErrorResponse } from '@utils/error'

export const addNewProject = async (
  req: Request<null, ApiResponse<string>, AddProjectApiPayload, null>,
  res: Response<ApiResponse<string>>
) => {
  try {
    const newProjectId = await addProjectToDb(req.body)

    return res.status(200).send({
      message: 'ok',
      success: true,
      data: newProjectId,
    })
  } catch (ex: any) {
    const error = ex as unknown as Error

    console.error('An exception occurred while adding project to database, ', error.message)

    const { message, stack, status } = createErrorResponse(error.message, error?.stack)

    res.status(status).send({ message, success: false, stack })
  }
}
