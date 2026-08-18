'use client'
import {LicenseTypeLabel, mockPilotProfileList} from "@/app/(dashboard)/pilot/mock";
import {DataTable, DataTableColumn} from "@/components/common/DataTable";


type PilotItem = typeof mockPilotProfileList[number];


export default function PilotPage() {

    const columns: DataTableColumn<PilotItem>[] = [
        {
            title:"真实姓名",
            render:(row) => <span className={"font-medium"}>{row.realName}</span>
        },
        {
            title:"身份证号",
            render:(row) => row.idCard
        },
        {
            title:"无人机执照编号",
            render:(row) => row.caacLicenseNo ?? "-"
        },
        {
            title:"执照类型",
            render:(row) => row.licenseType ? LicenseTypeLabel[row.licenseType] : "-"
        },
        {
            title:"执照到期日期",
            render:(row) => row.licenseExpiryDate ?? "-"
        },


    ]

    return (
            <DataTable
            columns={columns}
            data={mockPilotProfileList}
            rowKey={(_,idx)=>idx}
            onEdit={(row) => {
                console.log("编辑飞手", row)
            }}
            onCopy={(row) => {
                console.log("复制飞手", row)
            }}
            onDelete={(row) => {
                console.log("删除飞手", row)
            }}
            />
    )
}