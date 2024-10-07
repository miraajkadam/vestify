'use client'

import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { login } from '@/lib/api'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Cookies from 'js-cookie'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true)
    setError('')

    try {
      const response = await login(data)
      if (response.success && response.data?.access_token) {
        Cookies.set('access_token', response.data.access_token, {
          expires: 7,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
        })
        router.push('/vc/profile')
      } else {
        setError(response.message || 'Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-[1440px] h-[100vh] relative bg-[#f7f9fc] flex justify-center items-center'>
      <div className='w-[456px] px-7 py-8 left-[492px] bg-white rounded-[10px] border border-[#d0d4dd]'>
        <div className='w-[400px] flex-col justify-start items-center gap-8 flex'>
          <div className='w-[400px] h-[34px] flex-col justify-start items-center flex'>
            <div className="text-[#101828] text-[28px] font-semibold font-['Urbanist'] leading-[33.60px]">
              WELCOME TO MAMBAX
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-[400px] flex-col justify-start items-center gap-[30px] flex'
          >
            <div className='self-stretch flex-col justify-start items-start gap-8 flex'>
              <div className='w-[400px] flex-col gap-6'>
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
              <button
                type='submit'
                className="w-full h-[55px] bg-indigo-600 rounded-lg text-white text-base font-semibold font-['Urbanist'] leading-normal flex justify-center items-center"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'SIGN IN'}
              </button>
              {error && <p className='text-red-600 text-center'>{error}</p>}
            </div>
            <p className='text-center text-sm text-gray-600'>
              Create an account?{' '}
              <Link
                href='/auth/signup'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
