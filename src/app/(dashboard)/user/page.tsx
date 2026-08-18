'use client'

import {mockUserList} from "@/app/(dashboard)/user/mock";
import {DataTable, DataTableColumn} from "@/components/common/DataTable";
import {Badge} from "lucide-react";


type UserItem = (typeof mockUserList)[number];


export default function UserPage() {
    const columns: DataTableColumn<UserItem>[] = [
        {
            title: "用户名",
            render: (row) => <span className="font-medium">{row.username}</span>,
        },
        {
            title: "手机号",
            render: (row) => row.phone,
        },
        {
            title: "生日",
            render: (row) => row.birthDay ?? "-",
        },
        {
            title: "角色",
            render: (row) => {

                return <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">{row.role}</span>;
            },

        },
        {
            title: "状态",
            render: (row) => (
                <span
                    className={`px-2 py-1 rounded-full ${row.status === "活跃" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {row.status}
                </span>
            ),
        },
        {
            title: "飞手认证",
            render: (row) =>  (row.isVerifiedPilot ? "✅ 已认证" : "❌ 未认证"),
        },
        {
            title: "真实姓名",
            render: (row) => row.realName ?? "-",
        }
    ]
    return (
        <DataTable
            columns={columns}
            data={mockUserList}
            rowKey={(_, idx) => idx}
            onEdit={(row) => {
                console.log("编辑用户", row)
            }}
            onCopy={(row) => {
                console.log("复制用户", row)
            }}
            onDelete={(row) => {
                console.log("删除用户", row)
            }}
        />
    )
}