import '../globals.css'
import { SideNavbar } from '../../components/ui/SideNavbar'

import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex'>
        <main className='flex flex-row overflow-auto bg-gray-50 w-full'>
          <SideNavbar />
          <div className='flex-1'>{children}</div>
        </main>
      </body>
    </html>
  )
}
