'use client'
import { MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {mockPilotDeviceList} from "@/app/(dashboard)/device/mock";
import {LicenseTypeLabel, mockPilotProfileList} from "@/app/(dashboard)/pilot/mock";



export default function PilotPage() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>真实姓名</TableHead>
                    <TableHead>身份证号</TableHead>
                    <TableHead>无人机执照编号</TableHead>
                    <TableHead>执照类型</TableHead>
                    <TableHead>执照到期日期</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {mockPilotProfileList.map((item,index)=>(
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.realName}</TableCell>
                        <TableCell>{item.idCard}</TableCell>
                        <TableCell>{item.caacLicenseNo ?? "-"}</TableCell>
                        <TableCell>{item.licenseType ? LicenseTypeLabel[item.licenseType] : "-"}</TableCell>
                        <TableCell>{item.licenseExpiryDate ?? "-"}</TableCell>
                        <TableCell className="text-right">
                            <DropdownMenu>
                                <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="size-8"><MoreHorizontalIcon /><span className="sr-only">打开菜单</span></Button>} />
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>编辑</DropdownMenuItem>
                                    <DropdownMenuItem>复制</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem variant="destructive">
                                        删除
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>

                ))}

            </TableBody>
        </Table>
    )
}