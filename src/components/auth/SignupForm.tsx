'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const validateForm = (): boolean => {
    if (!email || !password || !username) {
      setError('Please fill in all fields.')
      return false
    }
    // Additional validation logic if needed
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        const { message } = await response.json()
        setError(message)
      }
    } catch (error) {
      setError('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-[1440px] h-[100vh] relative bg-[#f7f9fc] flex justify-center items-center'>
      <div className='w-[456px] h-[501px] px-7 py-8 left-[492px]   bg-white rounded-[10px] border border-[#d0d4dd]'>
        <div className='w-[400px] h-[437px] flex-col justify-start items-center gap-8 flex'>
          <div className='w-[400px] h-[34px] flex-col justify-start items-center flex'>
            <div className="text-[#101828] text-[28px] font-semibold font-['Urbanist'] leading-[33.60px]">
              WELCOME TO MAMBAX
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className='w-[400px] h-[371px] flex-col justify-start items-center gap-[30px] flex'
          >
            <div className='self-stretch h-[371px] flex-col justify-start items-start gap-8 flex'>
              <div className='w-[400px] flex-col gap-6'>
                {/* <div className='w-full flex-col gap-2'>
                  <label className="text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    USERNAME
                  </label>
                  <input
                    type='text'
                    className="w-full h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight"
                    placeholder='Enter Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div> */}
                <div className='w-full flex-col gap-2'>
                  <label className="text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    Email
                  </label>
                  <input
                    type='email'
                    className="w-full h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight"
                    placeholder='Enter Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className='w-full flex-col gap-2'>
                  <label className="text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    Password
                  </label>
                  <input
                    type='password'
                    className="w-full h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight"
                    placeholder='Enter Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className='w-full flex justify-between gap-4'>
                <div className='w-[200px] h-[60px] bg-[#ecf9ff] rounded-[10px] flex items-center justify-center gap-[5px]'>
                  <div className='w-10 h-10 relative' />
                  <div className="text-black text-base font-semibold font-['Urbanist'] leading-normal">
                    Twitter
                  </div>
                </div>
                <div className='w-[200px] h-[60px] bg-[#f1f2ff] rounded-[10px] flex items-center justify-center gap-[5px]'>
                  <div className='w-10 h-10 relative' />
                  <div className="text-black text-base font-semibold font-['Urbanist'] leading-normal">
                    Discord
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className="w-full h-[55px] bg-indigo-600 rounded-lg text-white text-base font-semibold font-['Urbanist'] leading-normal flex justify-center items-center"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'SIGN UP'}
              </button>
              {error && <p className='text-red-600 text-center'>{error}</p>}
            </div>
            <p className='text-center text-sm text-gray-600'>
              Already have an account?
              <Link
                href='/auth/login'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
