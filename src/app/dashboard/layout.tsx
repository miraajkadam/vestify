// import { SideNavbar } from '@/components/ui/SideNavbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      {/* <SideNavbar /> */}
      <main className='flex-1 w-[calc(100%-100px)]'>{children}</main>
    </div>
  )
}
