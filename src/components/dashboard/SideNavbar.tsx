'use client'

import { Home, User, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function SideNavbar() {
  return (
    <nav className='flex flex-col h-screen w-16 bg-gray-100 dark:bg-gray-800'>
      <div className='flex-1 flex flex-col items-center space-y-4'>
        {/* Logo */}
        <div className='p-4'>
          <svg
            className='h-8 w-8 text-blue-600 transition-transform duration-200 ease-in-out hover:scale-110'
            fill='none'
            height='24'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
            <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
            <path d='M12 3v6' />
          </svg>
        </div>

        {/* Home Icon */}
        <Link href='/dashboard'>
          <Button
            variant='ghost'
            size='icon'
            className='w-12 h-12 transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 active:scale-95'
          >
            <Home className='h-6 w-6' />
            <span className='sr-only'>Home</span>
          </Button>
        </Link>

        {/* Profile Icon (moved to upper part) */}
        <Link href='/profile'>
          <Button
            variant='ghost'
            size='icon'
            className='w-12 h-12 transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 active:scale-95'
          >
            <User className='h-6 w-6' />
            <span className='sr-only'>Profile</span>
          </Button>
        </Link>
      </div>

      <div className='flex-shrink-0 flex flex-col items-center space-y-4 mb-4'>
        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='w-12 h-12 transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 active:scale-95'
            >
              <Settings className='h-6 w-6' />
              <span className='sr-only'>Settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='w-12 h-12 rounded-full transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 active:scale-95'
            >
              <Avatar>
                <AvatarImage src='/placeholder-avatar.jpg' alt='@username' />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
