import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import { ChevronRight } from "lucide-react"
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "./ui/Table"

const salesData = [
    {
        id: 1,
        name: "Alexander Cruz",
        email: "alexander@gmail.com",
        status: "Success",
        date: "OCT 14, 2023",
        amount: "$1,500",
        change: "+15%",
        avatar: "/placeholder.svg",
        initials: "AC",
    },
    {
        id: 2,
        name: "Sophia Mitchell",
        email: "sophia@gmail.com",
        status: "Pending",
        date: "OCT 13, 2023",
        amount: "$1,000",
        change: "+20%",
        avatar: "/placeholder.svg",
        initials: "SM",
    },
    {
        id: 3,
        name: "Alexander Cruz",
        email: "alexander@gmail.com",
        status: "Success",
        date: "OCT 14, 2023",
        amount: "$1,500",
        change: "+15%",
        avatar: "/placeholder.svg",
        initials: "AC",
    },
]

export function SalesTable() {
    return (
        <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Sales Report</h3>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-hover font-bold"
                >
                    See All Data{" "}
                    <ChevronRight className="w-4 h-4 ml-1 text-primary font-bold" />
                </Button>
            </div>

            <div className="overflow-x-auto">
                <Table className="table-fixed w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[35%]">Customer</TableHead>
                            <TableHead className="w-[30%]">Status</TableHead>
                            <TableHead className="w-[20%]">Date</TableHead>
                            <TableHead className="w-fit text-right">Amount</TableHead>
                            <TableHead className="w-fit text-right">Change</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {salesData.map((sale) => (
                            <TableRow key={`${sale.id}-${sale.email}`}>
                                <TableCell className="w-[30%]">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-9 h-9">
                                            <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                                                {sale.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">
                                                {sale.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {sale.email}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="w-[20%]">
                                    <Badge

                                        className={
                                            sale.status === "Success"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                        }
                                    >
                                        {sale.status}
                                    </Badge>
                                </TableCell>

                                <TableCell className="w-[20%] text-sm text-muted-foreground">
                                    {sale.date}
                                </TableCell>

                                <TableCell className="w-fit text-right font-bold whitespace-nowrap">
                                    {sale.amount}
                                </TableCell>

                                <TableCell className={`w-fit text-right text-xs text-success whitespace-nowrap `}>

                                    <Badge

                                        className={
                                            sale.status === "Success"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                        }
                                    >

                                        {sale.change}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card >
    )
}
