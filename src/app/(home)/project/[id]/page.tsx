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
    <div className='h-[100vh] w-full bg-white items-start inline-flex overflow-y-scroll'>
      <div className='pt-[35px] w-full pb-8 bg-white flex-col justify-start items-end inline-flex'>
        <div className='px-8 w-full flex-col justify-start items-start flex'>
          <div className='flex-col w-full justify-start items-start gap-[30px] flex'>
            <div className='w-full justify-end items-end gap-[103px] inline-flex'>
              <div className='w-full flex-col justify-start items-start gap-6 inline-flex'>
                {/* Header */}
                <div className='w-full flex-col justify-start items-start gap-[15px] flex'>
                  <div className='p-1.5 bg-[#f3f3f3] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                    <div className="text-black text-[15px] font-semibold font-['Urbanist'] leading-snug">
                      Distributing
                    </div>
                  </div>
                  <div className="text-black text-3xl font-bold font-['Urbanist'] leading-[43.50px]">
                    {projectDetails.name}
                  </div>
                </div>
                {/* Profile */}
                <Profile token={projectDetails.token} project={projectDetails} />
              </div>
              {/* Right side content */}
              <div className='flex-col justify-start items-end gap-[25px] inline-flex'>
                {/* ... Add right side content here ... */}
              </div>
            </div>

            <div className='w-full flex-col justify-start items-start gap-[30px] flex'>
              <div className='w-full justify-start items-start gap-[53px] inline-flex'>
                <div className='w-full flex-col justify-start items-start gap-[25px] inline-flex'>
                  <About project={projectDetails} />
                  <Team project={projectDetails} />
                  <Partner partnersAndInvestors={projectDetails.partnersAndInvestors} />
                </div>
                <Deal project={projectDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
