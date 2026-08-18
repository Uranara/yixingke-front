'use client'
import {MoreHorizontalIcon} from "lucide-react"
import {Button} from "@/components/ui/button"
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
import React from "react";


export type DataTableColumn<T> = {
    title: string
    alignRight?: boolean
    render: (row: T) => React.ReactNode
}


interface DataTableProps<T> {
    columns: DataTableColumn<T>[]
    data: T[]
    rowKey?: (row: T, index: number) => string | number
    onEdit?: (row: T) => void
    onCopy?: (row: T) => void
    onDelete?: (row: T) => void
}

export function DataTable<T>({
                                 columns,
                                 data,
                                 rowKey = (row, index) => (row as { id?: string | number })?.id ?? index,  // 默认实现
                                 onEdit,
                                 onCopy,
                                 onDelete,
                             }: DataTableProps<T>) {
    const totalColspan = columns.length + 1;
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((col, idx) => (
                        <TableHead
                            key={idx}
                            className={col.alignRight ? "text-right" : ""}
                        >
                            {col.title}
                        </TableHead>
                    ))}
                    <TableHead className="text-right">操作</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={totalColspan}
                                   className={"text-center text-muted-foreground py-8"}>
                            暂无数据
                        </TableCell>
                    </TableRow>
                ) : (
                    data.map((item, index) => (
                        <TableRow key={rowKey(item, index)}>

                            {columns.map((col, colIdx) => (
                                <TableCell
                                    key={colIdx}
                                    className={col.alignRight ? "text-right" : ""}
                                >
                                    {col.render(item)}
                                </TableCell>
                            ))}

                            <TableCell className="text-right">

                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={(props) =>(
                                            <Button
                                                {...props}
                                                variant="ghost"
                                                size="icon"
                                                className="size-8">
                                                <MoreHorizontalIcon/>
                                                <span className="sr-only">打开操作菜单</span>
                                            </Button>
                                            )

                                        }
                                    />

                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => onEdit?.(item)}>
                                            编辑
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onCopy?.(item)}>
                                            复制
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem
                                            className="focus:bg-destructive/10 focus:text-destructive"
                                            onClick={() => onDelete?.(item)}
                                        >
                                            删除
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    )
}