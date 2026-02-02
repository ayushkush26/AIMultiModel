"use client"

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Sun, Moon, SquarePen } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"; 

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="Logo" width={50} height={50} className='w-[40px] h-[40px]' />
                    <h2 className="font-bold text-xl ">AI Chatbot</h2>
                </div>
                <div>
                    {/* Only render the button if mounted is true */}
                    {mounted ? (
                        theme === 'light' ? (
                            <Button variant={'ghost'} onClick={() => setTheme('dark')}>
                                <Sun />
                            </Button>
                        ) : (
                            <Button variant={'ghost'} onClick={() => setTheme('light')}>
                                <Moon />
                            </Button>
                        )
                        ) : (
                            <Button variant={'ghost'} disabled className="opacity-0">
                                <Sun />
                            </Button>
                    )}
                </div>
            </div>
            <div className="mt-5">
                <Button className="w-full h-12 justify-center items-center font-semibold " size="lg">
                    <SquarePen className="mr-2 w-5 h-5" />
                    New Chat
                </Button>
            </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <div className="p-3">
                <h2 className="font-bold text-lg">Chat</h2>
                <p className="text-sm text-gray-400">Sign to start chating with multiple AI Models</p>
            </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 mb-10">
            <Button className={'w-full'} size="lg">Sign In/Sign Up</Button>
        </div>
        </SidebarFooter>
    </Sidebar>
  )
}