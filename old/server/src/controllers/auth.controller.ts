import { UserType } from '@prisma/client'
import { type Request, type Response } from 'express'

import type {
  LoginApiPayload,
  LoginApiResponse,
  SignUpUserApiResponse,
  SignUpUserPayload,
} from '@customTypes/AuthTypes'
import { createNewUserInDb, getUserByEmailAndPasswordFromDb } from '@dtos/auth.dto'
import { ApiResponse } from '@models/ApiResponse'
import { createErrorResponse } from 'utils/error'

export const loginUser = async (
  req: Request<null, ApiResponse<LoginApiResponse>, LoginApiPayload, null>,
  res: Response<ApiResponse<LoginApiResponse>>
) => {
  try {
    const { username, password } = req.body

    const user = await getUserByEmailAndPasswordFromDb(username, password)

    if (!user)
      return res.status(400).send({
        message: 'Invalid email or password',
        success: false,
      })

    return res.status(200).send({
      message: 'successfully logged in',
      success: true,
      data: user,
    })
  } catch (ex: any) {
    const error = ex as unknown as Error

    console.error('An exception occurred while login user, ', error.message)

    const { message, stack, status } = createErrorResponse(error.message, error?.stack)

    res.status(status).send({ message, success: false, stack })
  }
}

export const signupUser = async (
  req: Request<null, ApiResponse<SignUpUserApiResponse>, SignUpUserPayload, null>,
  res: Response<ApiResponse<SignUpUserApiResponse>>
) => {
  try {
    const { username, password, userType } = req.body

    if (userType !== UserType.VC)
      if (userType !== UserType.USER)
        return res.status(403).send({ message: 'Invalid user type', success: false })

    const newUser = await createNewUserInDb(username, password, userType)

    if (!newUser)
      return res.status(400).send({
        message: 'Unable to create a new user',
        success: false,
      })

    return res.status(200).send({
      message: 'successfully created a new user',
      success: true,
      data: newUser,
    })
  } catch (ex: any) {
    const error = ex as unknown as Error

    console.error('An exception occurred while login user, ', error.message)

    const { message, stack, status } = createErrorResponse(error.message, error?.stack)

    res.status(status).send({ message, success: false, stack })
  }
}