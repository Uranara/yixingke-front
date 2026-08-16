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
import {mockUserList} from "@/app/(dashboard)/user/mock";



export default function UserPage() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>用户名</TableHead>
                    <TableHead>手机号</TableHead>
                    <TableHead>生日</TableHead>
                    <TableHead>角色</TableHead>
                    <TableHead>状态</TableHead>
                    <TableHead>飞手实名</TableHead>
                    <TableHead>真实姓名</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                    {mockUserList.map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.username}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>{item.birthDay ?? "-"}</TableCell>
                            <TableCell>{item.role}</TableCell>
                            <TableCell>{item.status ?? "-"}</TableCell>
                            <TableCell>{item.isVerifiedPilot ? "是" : "否"}</TableCell>
                            <TableCell>{item.realName ?? "-"}</TableCell>
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