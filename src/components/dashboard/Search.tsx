export function Search() {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search'
        className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>{/* Search icon */}</div>
    </div>
  )
}
