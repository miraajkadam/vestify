import { FiSearch } from 'react-icons/fi'

export function Search() {
  return (
    <div className='relative max-w-md w-full'>
      <input
        type='text'
        placeholder='Search'
        className='w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg'
      />
      <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
        <FiSearch className='text-gray-400 text-xl' />
      </div>
    </div>
  )
}
