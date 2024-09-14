// import { Inter } from "next/font/google";
import '../globals.css'
// import { Navbar } from "@/components/component/navbar";
import { SideNavbar } from '../../components/ui/SideNavbar'

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang='en'>
    //   <body>{children}</body>
    // </html>
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
