'use client'
import React, { useState, useEffect } from 'react'
import { Search } from './Search'
import { Filters } from './Filters'
import { CapitalCard } from './CapitalCard'

interface ProjectData {
  id: number
  name: string
  description: string
  price: string
  interval: string
}

interface ErrorResponse {
  message: string
}

const DashboardContent: React.FC = () => {
  const [data, setData] = useState<ProjectData[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/project/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const result = await response.json()
          setData(result.data) // Adjusted to set data from result.data
        } else {
          const errorData: ErrorResponse = await response.json()
          setError(errorData.message)
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
        <h1 className='text-3xl font-bold'>Capitals</h1>
        <div className='flex space-x-4'>
          <Search />
          <Filters />
        </div>
      </div>
      <div className='max-w-7xl '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <CapitalCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                interval={item.interval}
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

// const capitals = [
//   {
//     name: 'Spicy Capital',
//     description:
//       'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
//     price: '$50',
//     interval: 'Monthly',
//   },
//   {
//     name: 'DCI Capital',
//     description:
//       'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
//     price: 'Free',
//     interval: '',
//   },
//   {
//     name: 'Pivot Capital',
//     description:
//       'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
//     price: '$1,000k',
//     interval: 'Yearly',
//   },
//   {
//     name: 'Zk Link',
//     description:
//       'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
//     price: '$4.0k',
//     interval: 'Monthly',
//   },
// ]
