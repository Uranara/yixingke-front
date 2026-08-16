'use client'
import {Button} from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import Logo from "@/components/common/Logo";
import {Lock} from "lucide-react";
import React, {useState} from "react";
import {useRouter} from "next/navigation";


export default function LoginPage() {
    function DotPattern() {
        return <div
            className={"" +
                "absolute inset-0" +
                " bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,.15)_1px,transparent_0)] " +
                "dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.15)_1px,transparent_0)]" +
                " bg-size-[18px_18px] " +
                "pointer-events-none "}/>;
    }

    const [phone, setNickname] = useState("");
    const [passwordId, setPasswordId] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/");

    }
    return (

        <>
            <div className="relative min-h-dvh overflow-y-auto overflow-hidden">
                <DotPattern/>
                <div className={" min-h-screen flex items-center justify-center" +
                    "  bg-linear-to-br from-background via-background  " +
                    " to-zinc-50/30  px-5 sm:px-6 " +
                    " dark:to-zinc-950/20 "}>

                    <FieldGroup
                        className={"" +
                            "w-full max-w-md rounded-3xl border  " +
                            "border-white/30  bg-background/90 backdrop-blur p-5 " +
                            "shadow-xl shadow-black/10 sm:p-8  "}>
                        <div className={"flex justify-center"}>
                            <div
                                className={"" +
                                    "rounded-full border" +
                                    " bg-muted px-3 py-1 text-xs " +
                                    "font-medium text-muted-foreground"}>
                                中国领先无人机平台
                            </div>
                        </div>

                        <div className={"space-y-2 text-center"}>
                            <div className={"animate-in  fade-in zoom-in-95 duration-200 "}>
                                <Logo/>
                            </div>
                            <div className="space-y-1">
                                <h1 className="font-bold text-2xl tracking-tight">
                                    翼行客
                                </h1>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    候风系统
                                    <br/>
                                    智能领航
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}  className={"space-y-6"}>
                            <Field>
                                <FieldLabel htmlFor="phone">手机号</FieldLabel>
                                <Input
                                    value={phone}
                                    onChange={e => setNickname(e.target.value)}
                                    className={"h-10 rounded-xl focus-visible:ring-2  focus-visible:ring-zinc-500"}
                                    id="phone" placeholder="请填写你的手机号:"/>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="password">密码</FieldLabel>
                                <Input
                                    value={passwordId}
                                    onChange={e => setPasswordId(e.target.value)}
                                    className={"h-10 rounded-xl focus-visible:ring-2  focus-visible:ring-zinc-500"}
                                    id="password" placeholder="密码:"/>

                            </Field>
                            <Field>
                                <FieldLabel htmlFor="code">验证码</FieldLabel>
                                <Input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className={"h-10 rounded-xl focus-visible:ring-2  focus-visible:ring-zinc-500"}
                                    id="code"
                                    type="code"
                                    placeholder="验证码:"
                                />

                            </Field>

                            <Button type="submit"
                                    className={"w-full h-10 bg-zinc-600 " +
                                        "hover:bg-zinc-500 hover:shadow-lg  transition-colors   " +
                                        "rounded-xl font-medium"}>
                               进入管理后台 →
                            </Button>
                        </form>
                        <div className={"rounded-2xl border bg-muted/40 p-2 "}>
                            <div className="flex item-start gap-3">
                                <Lock className={"mt-0.5 h-4 w-4 text-zinc-600"}/>
                                <div className="space-y-1 ">
                                    <p className="text-sm font-medium ">
                                        AES-256 在线加密
                                    </p>
                                    <p className="text-xs leading-relaxed text-muted-foreground">
                                        你的放心首选
                                        <br/>
                                        无人机数据已加密
                                    </p>
                                </div>
                            </div>


                        </div>
                    </FieldGroup>

                </div>
            </div>
        </>


    )
}