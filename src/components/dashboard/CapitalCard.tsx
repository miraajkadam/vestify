interface CapitalCardProps {
  name: string
  description: string
  price: string
  interval: string
}

export function CapitalCard({ name, description, price, interval }: CapitalCardProps) {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center'>
          <div className='bg-blue-500 rounded-full p-2 mr-2'>{/* Twitter icon */}</div>
          <h2 className='font-semibold'>{name}</h2>
        </div>
        <button className='text-gray-400'>{/* Bookmark icon */}</button>
      </div>
      <p className='text-sm text-gray-600 mb-4'>{description}</p>
      <div className='flex justify-between items-center'>
        <div>
          <span className='font-bold'>{price}</span>
          <span className='text-gray-500 text-sm'>/{interval}</span>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Details</button>
      </div>
    </div>
  )
}
