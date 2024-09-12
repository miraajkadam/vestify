// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar: React.FC = () => {
  return (
    <div className='w-64 bg-sky-500 h-screen p-4 flex flex-col justify-between shadow-lg'>
      <div>
        <h2 className='text-white text-xl font-bold mb-6'>Web3 Dashboard</h2>
        <nav>
          <ul>
            <li className='mb-2'>
              <Link
                href='/overview'
                className='text-white hover:bg-sky-600 p-2 rounded flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 12h14M5 6h14M5 18h14'
                  />
                </svg>
                Overview
              </Link>
            </li>
            <li className='mb-2'>
              <Link
                href='/team'
                className='text-white hover:bg-sky-600 p-2 rounded flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 20h5v-5h-5zM4 10h5v5H4zM4 20h5v-5H4zM12 4h5v5h-5zM12 10h5v5h-5zM12 16h5v5h-5z'
                  />
                </svg>
                Team
              </Link>
            </li>
            <li className='mb-2'>
              <Link
                href='/funding'
                className='text-white hover:bg-sky-600 p-2 rounded flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7h18M3 12h18M3 17h18'
                  />
                </svg>
                Funding
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer className='text-center text-white text-sm'>© 2024 Web3 Project</footer>
    </div>
  )
}

export default Sidebar
