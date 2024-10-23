'use client'
import React, { useState, useEffect } from 'react'
import logo from '../../../../public/icons/user.svg'
import { getUserProfile, UserProfile } from '@/lib/api'
import Navbar from '@/components/profile/Navbar'
import Profile from '@/components/profile/Profile'
import Tabs from '@/components/profile/Tabs'
import Wallets from '@/components/profile/Wallets'
import Deals from '@/components/profile/Deals'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

interface DecodedToken {
  user: { id: string }
  iat: number
}

const Page: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true)
        const token = Cookies.get('access_token')
        if (!token) {
          throw new Error('No access token found')
        }
        const decodedToken = jwtDecode<DecodedToken>(token)
        console.log('Decoded Token:', decodedToken)

        const userId = decodedToken.user.id
        console.log('Using User ID:', userId)

        const response = await getUserProfile(userId)
        if (response.success) {
          setProfile(response.data)
        } else {
          throw new Error(response.message || 'Failed to fetch user profile')
        }
      } catch (err) {
        console.error('Failed to fetch user profile:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='h-[100vh] bg-white justify-start items-start inline-flex w-[100%] overflow-y-scroll '>
      <div className='p-[32px] w-full pb-8 bg-white flex-col justify-start  inline-flex'>
        <div className='  '>
          <div>
            <div className='h-[829.29px] w-full  flex-col justify-start items-start gap-[30px] flex'>
              <Navbar />

              {/* Profile Section */}
              <div className='self-stretch w-full justify-between items-start inline-flex'>
                <div className=' h-[240.34px] flex-col justify-start items-start gap-[24.90px] inline-flex'>
                  <Profile profile={profile} logo={logo} />

                  <Tabs profile={profile} />
                </div>

                <Wallets profile={profile} />
              </div>

              <Deals profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
