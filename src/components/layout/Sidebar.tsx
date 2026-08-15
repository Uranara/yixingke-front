"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupLabel,
    SidebarHeader, SidebarMenu,
    SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail
} from "@/components/ui/sidebar";
import Logo from "@/components/common/Logo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {AlertCircle, Box, ClipboardList, Cpu,ChevronsUpDown, Settings, ChevronRight, Drone, LayoutDashboard} from "lucide-react";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";


export function AppSidebar() {


    return (
        <Sidebar collapsible="icon">

            <SidebarHeader>


            </SidebarHeader>


            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        无人机管理
                    </SidebarGroupLabel>

                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton render={
                                <Link href="/">
                                    <LayoutDashboard/>
                                    <span>仪表盘</span>
                                    <ChevronRight className={"ml-auto"}/>
                                </Link>
                            }>

                            </SidebarMenuButton>

                        </SidebarMenuItem>


                        <SidebarMenuItem>

                            <SidebarMenuButton
                                render={
                                    <Link href="/device">
                                        <Drone/>
                                        <span>设备管理</span>
                                        <ChevronRight className={"ml-auto"}/>
                                    </Link>
                                }
                            >


                            </SidebarMenuButton>

                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton
                                render={
                                    <Link href="/mission">
                                        <ClipboardList/>
                                        <span>任务管理</span>
                                        <ChevronRight className={"ml-auto"}/>
                                    </Link>
                                }
                            >

                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton
                                render={
                                    <Link href="/alarm">
                                        <AlertCircle/>
                                        <span>告警中心</span>
                                        <ChevronRight className={"ml-auto"}/>
                                    </Link>
                                }>


                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuSubButton>
                                <Settings/>
                                <span>设置</span>
                                <ChevronRight className={"ml-auto"}/>

                            </SidebarMenuSubButton>
                            <SidebarMenuSub>

                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton>个人信息</SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton>重置密码</SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </SidebarMenuItem>

                    </SidebarMenu>

                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className={"flex w-full items-center justify-center gap-4 rounded-md p-2 hover:bg-accent"}>
                                <Avatar className={"h-8 w-8 rounded-lg"}>
                                    <AvatarImage  src="" alt="头像" />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight min-w-0">
                                    <span className="truncate font-semibold">李华</span>
                                    <span className="truncate text-xs">1535676543</span>

                                </div>
                                <ChevronsUpDown className={"h-4 w-4 opacity-50 shrink-0"} />

                            </DropdownMenuTrigger>

                            <DropdownMenuContent side={"right"} align={"center"} sideOffset={8} className={"min-w-33 w-33 px-1"} >
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>个人信息</DropdownMenuItem>
                                    <DropdownMenuItem>账单</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator/>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>团队</DropdownMenuItem>
                                    <DropdownMenuItem>订阅</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator/>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>退出</DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>

                        </DropdownMenu>


                    </SidebarMenuItem>
                </SidebarMenu>


            </SidebarFooter>

            <SidebarRail/>
        </Sidebar>
    )
}