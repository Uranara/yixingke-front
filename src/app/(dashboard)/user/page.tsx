'use client'

import {DataTable, DataTableColumn} from "@/components/common/DataTable";
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";


interface UserApi {
    userId: number
    phone: string
    role: "ADMIN" | "USER" | "PILOT" | "ENTERPRISE"
    status: "ACTIVE" | "SUSPENDED"
    isVerifiedPilot: boolean
    realName: string | null
    createdAt: string
    updatedAt: string
}


const ROLE_LABEL_MAP: Record<UserApi["role"], string> = {
    ADMIN: "管理员",
    USER: "用户",
    PILOT: "飞行员",
    ENTERPRISE: "企业",
}


export default function UserPage() {
    const router = useRouter()


    const [users, setUsers] = useState<UserApi[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchUser = async () => {
            try {
                const tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInBob25lIjoiMTM4MDAxMzgwMDAiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODcwMzUyNzgsImV4cCI6MTc4NzY0MDA3OH0.Fp05vulmn7GVeeQaQ4fiQ4Mw02FdaLPwRwdPgdNjZ7E"
                const token = localStorage.getItem("token") || tempToken

                if (!token) {
                    router.push("/login")
                    return;
                }

                const res = await fetch("/api/user/all", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    signal
                })
                if (!res.ok) {
                    if (res.status === 401) {
                        setError("登录已过期，请重新登录")
                    }else{
                        setError(`请求失败 (${res.status})`);

                    }
                    return
                }

                const data = await res.json()

                setUsers(data)

            } catch (err) {
                if (err instanceof Error && err.name !== "AbortError") {
                    setError(err.message)
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false)
                }
            }
        }
        fetchUser()

        return () => controller.abort()

    }, [router])


    const columns: DataTableColumn<UserApi>[] = [
        {
            title: "手机号",
            render: (row) => <span className="font-medium">{row.phone}</span>,
        },
        {
            title: "角色",
            render: (row) => {
                return <span
                    className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {ROLE_LABEL_MAP[row.role] || row.role}
                </span>;
            }
        },

        {
            title: "状态",
            render: (row) => (
                <span
                    className={`px-2 py-1 rounded-full ${row.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {row.status === "ACTIVE" ? "活跃" : "暂停"}
                </span>
            ),
        },
        {
            title: "飞手认证",
            render: (row) => (row.isVerifiedPilot ? "✅ 已认证" : "❌ 未认证"),
        },
        {
            title: "真实姓名",
            render: (row) => row.realName ?? "-",
        },
        {
            title: "注册时间",
            render: (row) => {
                const data = new Date(row.createdAt)
                return  isNaN(data.getTime()) ? "-" : data.toLocaleDateString("zh-CN")
            }
        }
    ]

    if (loading) {
        return <div className={"p-6 text-center"}>
            加载用户列表中...
        </div>
    }
    if (error) {
        return <div className={"p-6 text-center text-red-500"}>加载失败: {error}</div>
    }


    return (
        <DataTable
            columns={columns}
            data={users}
            rowKey={(row) => row.userId}
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