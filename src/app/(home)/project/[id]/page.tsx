'use client'
import { useEffect, useState } from 'react'
import About from '@/components/projectid/About'
import Deal from '@/components/projectid/Deal'
import Partner from '@/components/projectid/Partner'
import Profile from '@/components/projectid/Profile'
import Team from '@/components/projectid/Team'
import { getProjectDetails } from '@/lib/api'

interface ProjectDetails {
  id: string
  name: string
  description: string
  token: {
    price: number
    allocation: string
    vesting: string
    tge: string
    tgeUnlock: string
  }
  round: string
  tokensReceived: number
  partnersAndInvestors: Array<{
    name: string
    logoBase64: string
  }>
  info: {
    name: string
    description: string
    round: string
    categories: string[]
  }
  socialLink: {
    medium?: string
    discord?: string
    x?: string
    telegram?: string
    instagram?: string
    youtube?: string
  }
  teamAndAdvisors: Array<{
    name: string
    title: string
    imgBase64: string
    description: string
  }>
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(null)

  useEffect(() => {
    getProjectDetails(params.id)
      .then(response => {
        if (response.success) {
          setProjectDetails(response.data)
        } else {
          console.error('Failed to fetch project details:', response.message)
        }
      })
      .catch(error => console.error('Error fetching project details:', error))
  }, [params.id])

  if (!projectDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>{projectDetails.name}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <About project={projectDetails} />
          <Deal project={projectDetails} />
        </div>
        <div>
          <Profile token={projectDetails.token} project={projectDetails} />
          <Team project={projectDetails} />
        </div>
      </div>

      <div className='mt-8'>
        <Partner partnersAndInvestors={projectDetails.partnersAndInvestors} />
      </div>
    </div>
  )
}
