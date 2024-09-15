'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginForm: React.FC = () => {
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

    //     /**
    //      Here you would normally call your API to authenticate the user
    //      For now, we'll use dummy credentials
    //      */

    if (email === 'zaki@gmail.com' && password === 'password') {
      router.push('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className='w-[1440px] h-[100vh] relative bg-[#f7f9fc] flex justify-center items-center'>
      <div className='w-[456px]  px-7 py-8 left-[492px]   bg-white rounded-[10px] border border-[#d0d4dd]'>
        <div className='w-[400px]  flex-col justify-start items-center gap-8 flex'>
          <div className='w-[400px] h-[34px] flex-col justify-start items-center flex'>
            <div className="text-[#101828] text-[28px] font-semibold font-['Urbanist'] leading-[33.60px]">
              WELCOME TO MAMBAX
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className='w-[400px]  flex-col justify-start items-center gap-[30px] flex'
          >
            <div className='self-stretch  flex-col justify-start items-start gap-8 flex'>
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
              {/* <div className='w-full flex justify-between gap-4'>
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
              </div> */}
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
              Create an account?
              <Link
                href='/auth/signup'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Singup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

// 'use client'

// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const router = useRouter()

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     /**
//      Here you would normally call your API to authenticate the user
//      For now, we'll use dummy credentials
//      */

//     if (email === 'zaki@gmail.com' && password === 'password') {
//       router.push('/dashboard')
//     } else {
//       alert('Invalid credentials')
//     }
//   }

//   return (
//     <div className='flex justify-center items-center min-h-screen bg-gray-100'>
//       <div className='bg-white p-8 rounded-lg shadow-md w-96'>
//         <h2 className='text-2xl font-bold mb-6 text-center'>LOGIN TO MAMBAX</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-4'>
//             <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
//               Email
//             </label>
//             <input
//               type='email'
//               id='email'
//               className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
//               placeholder='Enter Email'
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className='mb-6'>
//             <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
//               Password
//             </label>
//             <input
//               type='password'
//               id='password'
//               className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
//               placeholder='Enter Password'
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type='submit'
//             className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//           >
//             LOG IN
//           </button>
//         </form>
//         <p className='mt-4 text-center text-sm text-gray-600'>
//           Dont have an account?
//           <Link href='/auth/signup' className='font-medium text-indigo-600 hover:text-indigo-500'>
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default LoginForm
