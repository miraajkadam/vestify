'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    /**
          Here you would normally call your API to register the user     
          For now, we'll use dummy credentials
        */

    if (username && email) {
      console.log('Signup successful:', { username, email })
      router.push('/dashboard')
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center'>WELCOME TO MAMBAX</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
              USERNAME
            </label>
            <input
              type='text'
              id='username'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              placeholder='Enter Username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              placeholder='Enter Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='flex space-x-4 mb-6'>
            <button
              type='button'
              className='flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              <img src='/twitter-icon.png' alt='Twitter' className='inline-block mr-2 h-5 w-5' />
              Twitter
            </button>
            <button
              type='button'
              className='flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <img src='/discord-icon.png' alt='Discord' className='inline-block mr-2 h-5 w-5' />
              Discord
            </button>
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            SIGN UP
          </button>
        </form>
        <p className='mt-4 text-center text-sm text-gray-600'>
          Already have an account?{' '}
          <Link href='/auth/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupForm
