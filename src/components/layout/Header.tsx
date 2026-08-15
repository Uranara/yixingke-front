import {SidebarTrigger} from "@/components/ui/sidebar";
import {Bell, Search} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import {ModeToggle} from "@/components/layout/ModeToggle";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <>
            <div className={" flex w-full h-16 items-center px-4 gap-4  "}>
                <SidebarTrigger/>
                <InputGroup className="max-w-xs flex-1">
                    <InputGroupInput placeholder="搜索设备、任务、航线..." />
                    <InputGroupAddon>
                        <Search className={"h-4 w-4"} />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                        12 个结果
                    </InputGroupAddon>
                </InputGroup>
                <div className="items-center flex gap-4 ml-auto ">
                    <ModeToggle />
                    <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-4 w-4 " />
                    <span  className={"absolute right-1 top-1 h-2 w-2 rounded-full " +
                        "bg-destructive ring-2 ring-background"} />
                    </Button>
                </div>

            </div>
        </>
    )
}






