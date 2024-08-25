import { PrismaClient, type UserType } from '@prisma/client'

const prisma = new PrismaClient()

export const createNewUserInDb = async (username: string, password: string, userType: UserType) => {
  const user = await prisma.users.create({
    data: { Username: username, Password: password, UserType: userType },
    select: {
      Id: true,
    },
  })

  return user?.Id
}

export const getUserByEmailAndPasswordFromDb = async (username: string, password: string) => {
  const user = await prisma.users.findFirst({
    where: {
      Username: username,
      Password: password,
    },
  })

  return user?.Id
}
