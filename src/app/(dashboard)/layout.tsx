'use client'
import {AppSidebar} from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import React from "react";

// children：就是各个业务页面，比如device、mission、仪表盘页面
export default function DashboardLayout({children}: { children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
                    <AppSidebar/>
                <SidebarInset className="h-screen flex flex-col overflow-y-auto">

                    <header className="h-16 border-b border-gray-200 flex items-center ">
                        <Header/>
                    </header>

                    {/*面包屑导航*/}
                    <div className="px-6 pt-4">
                        <Breadcrumb/>
                    </div>

                    <main className="p-6 flex-1 overflow-auto">
                        {children}
                    </main>
                </SidebarInset>

        </SidebarProvider>
)

}