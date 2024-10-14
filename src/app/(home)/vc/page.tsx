'use client'
import React, { useState, useEffect } from 'react'
import { Search } from '@/components/dashboard/Search'
import { Filters } from '@/components/dashboard/Filters'
import { CapitalCard } from '@/components/capitalProfile/CapitalCard'
import { getAllVCs } from '@/lib/api'

interface VCData {
  name: string
  description: string
  logoBase64: string
  subscriptionFee: string
  id: string
}

const DashboardContent: React.FC = () => {
  const [data, setData] = useState<VCData[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllVCs()
        if (result.success) {
          setData(result.data)
        } else {
          setError(result.message)
        }
      } catch (error) {
        setError('An error occurred. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Venture Capitals</h1>
        <div className='flex space-x-4'>
          <Search />
          <Filters />
        </div>
      </div>
      <div className='max-w-7xl '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {data && data.length > 0 ? (
            data.map(item => (
              <CapitalCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.subscriptionFee}
                interval='Monthly'
              />
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
