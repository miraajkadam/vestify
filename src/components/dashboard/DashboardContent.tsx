import { Search } from './Search'
import { Filters } from './Filters'
import { CapitalCard } from './CapitalCard'

const capitals = [
  {
    name: 'Spicy Capital',
    description:
      'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
    price: '$50',
    interval: 'Monthly',
  },
  {
    name: 'DCI Capital',
    description:
      'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
    price: 'Free',
    interval: '',
  },
  {
    name: 'Pivot Capital',
    description:
      'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
    price: '$1,000k',
    interval: 'Yearly',
  },
  {
    name: 'Zk Link',
    description:
      'Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina Spicy Capital is a dynamic and visionary venture capital firm that ignites innovation and accelerates growth in the startup landscape. Founded on the belief that bold ideas should be seasoned with strategic investment, Spicy Capital specializes in early-stage ventures across diverse sectors, fro sustaina',
    price: '$4.0k',
    interval: 'Monthly',
  },
]

export function DashboardContent() {
  return (
    <div className='p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Capitals</h1>
        <div className='flex space-x-4'>
          <Search />
          <Filters />
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {capitals.map((capital, index) => (
            <CapitalCard
              key={index}
              name={capital.name}
              description={capital.description}
              price={capital.price}
              interval={capital.interval}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
