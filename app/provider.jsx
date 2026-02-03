import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'

import { ModelSelectionProvider } from './_context/ModelSelectionContext'

function Provider(
  { children, ...props }
) {
  return (
    <NextThemesProvider attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}>
      <ModelSelectionProvider>
        <SidebarProvider>
          <AppSidebar />
          <div className='w-full'><AppHeader />{children}</div>
        </SidebarProvider>
      </ModelSelectionProvider>

    </NextThemesProvider>
  )
}

export default Provider