'use client'
import { ArrowRight, Bookmark, Twitter } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import Link from 'next/link'

interface CapitalCardProps {
  name: string
  description: string
  price: string
  interval: string
}

export function CapitalCard({ name, description, price, interval }: CapitalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <div className='w-[315px] bg-white p-5 rounded-3xl border border-gray-300 flex flex-col h-full'>
      <div className='flex justify-between items-start mb-4'>
        <div className='bg-blue-500 rounded-full p-2'>
          <Twitter className='h-5 w-5 text-white' />
        </div>
        <button className='text-gray-400'>
          <Bookmark className='h-5 w-5' />
        </button>
      </div>

      <h2 className='font-urbanist text-xl font-semibold mb-3'>{name}</h2>

      <div
        className={`font-urbanist text-sm leading-6 text-gray-600 mb-4 ${
          isExpanded ? '' : 'max-h-[120px] overflow-hidden'
        }`}
      >
        {description}
      </div>

      {description.length > 120 && (
        <button
          onClick={toggleExpand}
          className='font-urbanist text-xs font-medium text-blue-500 mb-4 hover:underline'
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}

      <div className='flex justify-between items-center mt-auto'>
        <div className='font-urbanist'>
          <span className='font-bold text-lg'>{price}</span>
          {interval && <span className='text-gray-500 text-xs ml-1'>/{interval}</span>}
        </div>
        <Link href='/blog' passHref>
          <Button className='bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-indigo-700'>
            Details
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </Link>
      </div>
    </div>
  )
}
