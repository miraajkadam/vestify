import { type Request, type Response } from 'express'

import { ApiResponse } from '@models/ApiResponse'
import { UserType } from '@prisma/client'
import type {
  LoginApiPayload,
  LoginApiResponse,
  SignUpUserApiResponse,
  SignUpUserPayload,
} from '@customTypes/AuthTypes'
import { createNewUserInDb, getUserByEmailAndPasswordFromDb } from '@dtos/auth.dto'
export const loginUser = async (
  req: Request<null, ApiResponse<LoginApiResponse>, LoginApiPayload, null>,
  res: Response<ApiResponse<LoginApiResponse>>
) => {
  const { username, password } = req.body

  const user = await getUserByEmailAndPasswordFromDb(username, password)

  if (!user) {
    res.status(400).send({
      message: 'Invalid email or password',
      success: false,
    })
  } else {
    res.status(200).send({
      message: 'successfully logged in',
      success: true,
      data: user,
    })
  }
}

export const signupUser = async (
  req: Request<null, ApiResponse<SignUpUserApiResponse>, SignUpUserPayload, null>,
  res: Response<ApiResponse<SignUpUserApiResponse>>
) => {
  const { username, password, userType } = req.body

  if (userType !== UserType.VC)
    if (userType !== UserType.USER)
      return res.status(403).send({ message: 'Invalid user type', success: false })

  const newUser = await createNewUserInDb(username, password, userType)

  if (!newUser) {
    res.status(200).send({
      message: 'Invalid email or password',
      success: false,
    })
  } else {
    res.status(200).send({
      message: 'successfully logged in',
      success: true,
      data: newUser,
    })
  }
}
