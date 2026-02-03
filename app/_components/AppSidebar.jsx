"use client"

import { Button } from "@/components/ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Sun, Moon, SquarePen } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AiModelList from "@/shared/AiModelList";
import { useModelSelection } from "../_context/ModelSelectionContext";

export function AppSidebar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { selectedModels, setSingleModel, toggleModel } = useModelSelection();

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
                    <SidebarGroupLabel>Models</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {AiModelList.map((model) => {
                                const isSelected = selectedModels.includes(model.model);
                                return (
                                    <SidebarMenuItem key={model.model}>
                                        <SidebarMenuButton
                                            className={`h-12 ${isSelected ? 'bg-sidebar-accent text-sidebar-accent-foreground ring-1 ring-border' : ''}`}
                                            onClick={(e) => {
                                                if (e.metaKey || e.ctrlKey) {
                                                    toggleModel(model.model);
                                                } else {
                                                    setSingleModel(model.model);
                                                }
                                            }}
                                        >
                                            <Image
                                                src={model.icon}
                                                alt={model.model}
                                                width={24}
                                                height={24}
                                                className={`mr-2 rounded-md ${model.invert ? 'dark:invert' : ''}`}
                                            />
                                            <span>{model.model}</span>
                                            {isSelected && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <div className="p-3">
                        <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Tip:</span> Hold <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">⌘</kbd> to select multiple models.
                        </p>
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