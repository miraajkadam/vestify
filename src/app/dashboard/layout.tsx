import { SideNavbar } from '@/components/dashboard/SideNavbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex bg-gray-100'>
      <SideNavbar />
      <main className='flex-1 overflow-y-auto'>{children}</main>
    </div>
  )
}
