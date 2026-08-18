'use client'
import {mockPilotDeviceList} from "@/app/(dashboard)/device/mock";
import {DataTable, DataTableColumn} from "@/components/common/DataTable";

type DeviceItem = (typeof mockPilotDeviceList)[number]


export default function DevicePage() {
    const columns: DataTableColumn<DeviceItem>[] = [
        {
            title: "设备品牌",
            render: (row) => <span className="font-medium">{row.deviceBrand}</span>,
        },
        {
            title: "设备序列号SN",
            render: (row) => row.snCode,
        },
        {
            title: "最大载荷(kg)",
            render: (row) => row.maxPayload ?? "-",
        },
        {
            title: "最大抗风能力(m/s)",
            render: (row) => row.maxWindResistance ?? "-",
        },
    ]
    return (
            <DataTable
            columns={columns}
            data={mockPilotDeviceList}
            rowKey={(_,idx)=>idx}
            onEdit={(row) => {
                console.log("编辑设备", row)
            }}
            onCopy={(row) => {
                console.log("复制设备", row)
            }}
            onDelete={(row) => {
                console.log("删除设备", row)
            }}
            />
    )
}








