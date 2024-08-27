import type { AddProjectApiPayload } from '@customTypes/ProjectTypes'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
})

export const addProjectToDb = async (something: AddProjectApiPayload) => {
  const asd: AddProjectApiPayload = {
    info: {
      name: 'Bitcoin',
      category: 'Crypto',
      description: 'Bitcoing coincryoto',
      round: 'A',
    },
    tokenMetrics: {
      allocation: 'KMSAKMDK',
      fdv: 'KMDKSAMK',
      price: '192873219873',
      tgeUnlock: 'Yes',
      tge: new Date(),
      vesting: new Date(),
    },
    deals: {
      maximum: new Prisma.Decimal(2000.1),
      minimum: new Prisma.Decimal(1000),
      acceptedTokens: 'BTC',
      poolFee: new Prisma.Decimal(100),
    },
    teamAndAdvisors: [
      {
        description: 'Bitcoing is best',
        name: 'Bitcoin Foundation',
        title: 'Hello 123',
      },
      {
        description: 'Bitcoing is best 2',
        name: 'Bitcoin Foundation 2',
        title: 'Hello 123 2',
      },
    ],
    partnersAndInvestors: [
      {
        logo: 'Hello Logo',
        name: 'Partner Name',
      },
      {
        logo: 'Hello Logo 2',
        name: 'Partner Name 2',
      },
    ],
    projectSocials: {
      x: 'sad',
      instagram: '',
      discord: '',
      telegram: '',
      medium: '',
      youtube: '',
    },
  }

  const project = await prisma.projects.create({
    data: {
      name: asd.info.name,
      category: asd.info.category,
      description: asd.info.description,
      round: asd.info.round,
      projectTokenMetrics: {
        create: {
          allocation: asd.tokenMetrics.allocation,
          fdv: asd.tokenMetrics.fdv,
          price: asd.tokenMetrics.price,
          tgeUnlock: asd.tokenMetrics.tgeUnlock,
          tge: asd.tokenMetrics.tge,
          vesting: asd.tokenMetrics.vesting,
        },
      },
      projectDeals: {
        create: {
          maximum: asd.deals.maximum,
          minimum: asd.deals.minimum,
          acceptedTokens: asd.deals.acceptedTokens,
          poolFee: asd.deals.poolFee,
        },
      },
      projectTeamAndAdvisors: {
        createMany: {
          data: asd.teamAndAdvisors,
        },
      },
      projectPartnersAndInvestors: {
        createMany: {
          data: asd.partnersAndInvestors,
        },
      },
      projectSocials: {
        create: {
          x: asd.projectSocials.x,
          instagram: asd.projectSocials.instagram,
          discord: asd.projectSocials.discord,
          telegram: asd.projectSocials.telegram,
          medium: asd.projectSocials.medium,
          youtube: asd.projectSocials.youtube,
        },
      },
    },
    select: {
      id: true,
    },
  })

  return project?.id
}
