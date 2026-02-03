'use client'
import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

function AppHeader() {
  return (
    <div className='p-3 w-full flex justify-between items-center bg-gray-50 dark:bg-zinc-900 transition-colors duration-300'>
      <SidebarTrigger />
      <Button>Sign In</Button>
    </div>
  )
}

export default AppHeader