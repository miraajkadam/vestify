import { FiFilter } from 'react-icons/fi'

export function Filters() {
  return (
    <button className='flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'>
      <FiFilter className='text-gray-600' />
      <span className='text-gray-600 font-medium'>Filters</span>
    </button>
  )
}
