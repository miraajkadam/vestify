'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FormData {
  username: string
  email: string
  password: string
}

const initialFormData: FormData = {
  username: '',
  email: '',
  password: '',
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const validateForm = (): boolean => {
    const { username, email, password } = formData
    if (!username || !email || !password) {
      setError('Please fill in all fields.')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setError('')

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

    try {
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, userType: 'USER' }),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        const data = await response.json()
        setError(data.message || 'An error occurred during signup.')
      }
    } catch (error) {
      setError('An error occurred. Please try again later.')
      console.error('Signup error:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderInputField = (label: string, name: keyof FormData, type: string) => (
    <div className='w-full flex-col gap-2'>
      <label className="text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight"
        placeholder={`Enter ${label}`}
        value={formData[name]}
        onChange={handleInputChange}
      />
    </div>
  )

  return (
    <div className='w-[1440px] h-[100vh] relative bg-[#f7f9fc] flex justify-center items-center'>
      <div className='w-[456px] h-[501px] px-7 py-8 left-[492px] bg-white rounded-[10px] border border-[#d0d4dd]'>
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
                {renderInputField('Username', 'username', 'text')}
                {renderInputField('Email', 'email', 'email')}
                {renderInputField('Password', 'password', 'password')}
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
              Already have an account?{' '}
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
