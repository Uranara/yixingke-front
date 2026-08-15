
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemHeader,
    ItemTitle,
} from "@/components/ui/item"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ClientMap from "@/components/layout/ClientMap";


const models = [
    {
        name: "在线无人机",
        number:12,
        description: "平台注册运行数量",

    },
    {
        name: "进行中任务",
        number:34,
        description: "正常电量执行的无人机",
    },

    {
        name: "今日告警",
        number:21,
        description: "无人机报警异常",

    },
]


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "已支付",
        totalAmount: "250.00",
        paymentMethod: "支付宝",
    },
    {
        invoice: "INV002",
        paymentStatus: "等待",
        totalAmount: "150.00",
        paymentMethod: "微信",
    },
    {
        invoice: "INV003",
        paymentStatus: "未支付",
        totalAmount: "350.00",
        paymentMethod: "银行转账",
    },
    {
        invoice: "INV004",
        paymentStatus: "已支付",
        totalAmount: "450.00",
        paymentMethod: "支付宝",
    },
    {
        invoice: "INV005",
        paymentStatus: "已支付",
        totalAmount: "550.00",
        paymentMethod: "微信",
    },
    {
        invoice: "INV006",
        paymentStatus: "等待",
        totalAmount: "200.00",
        paymentMethod: "银行转账",
    },
    {
        invoice: "INV007",
        paymentStatus: "未支付",
        totalAmount: "300.00",
        paymentMethod: "支付宝",
    },
]

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-y-8">

            <div className="flex w-full flex-col gap-6">
                <ItemGroup className="grid grid-cols-3 gap-4">
                    {models.map((model) => (
                        <Item key={model.name} variant="outline">
                            <ItemHeader>
                                {model.name}
                            </ItemHeader>
                            <ItemContent>
                                <ItemTitle>{model.number}</ItemTitle>
                                <ItemDescription>{model.description}</ItemDescription>
                            </ItemContent>
                        </Item>
                    ))}
                </ItemGroup>
            </div>


            <Table>
                <TableCaption>最近的无人机订单</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">订单号</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead>支付方式</TableHead>
                        <TableHead className="text-right">金额</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>总价</TableCell>
                        <TableCell className="text-right">2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <ClientMap/>
        </div>
    );
}