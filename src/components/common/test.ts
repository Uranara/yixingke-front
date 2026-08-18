import React from "react";


type User = {
    id:number,
    name:string
    salary:number
}

type DataTableColumn<T> = {
    title: string
    alignRight?: boolean
    render: (row: T) => React.ReactNode
}

const columns :DataTableColumn<User>[] = [
    {
        title:"姓名",
        render:(row111) => 12
    }
]










