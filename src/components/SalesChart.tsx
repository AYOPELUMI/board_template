"use client"
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { Card } from "./ui/Card";

const data = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 35 },
    { name: "Mar", value: 28 },
    { name: "Apr", value: 45 },
    { name: "May", value: 42 },
    { name: "Jun", value: 48 },
    { name: "Jul", value: 38 },
    { name: "Aug", value: 35 },
    { name: "Sep", value: 30 },
    { name: "Oct", value: 25 },
    { name: "Nov", value: 20 },
    { name: "Dec", value: 15 },
];

function CustomTooltip({ active, payload }: any) {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-md bg-white shadow-md px-3 py-1 border border-gray-200">
                <p className="text-sm font-semibold text-gray-800">${payload[0].value}.00</p>
            </div>
        );
    }
    return null;
}

export function SalesChart() {
    return (
        <Card className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Sales Report</h3>
                <Button variant="default" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Export to PDF
                </Button>
            </div>

            {/* Chart */}
            <div className="h-[300px] w-full bg-gradient-to-b from-purple-50 via-white to-white">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--dashboard-border)" vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                        />
                        <YAxis hide />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "var(--primary)", strokeDasharray: "3 3" }} />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="var(--primary)"
                            strokeWidth={3}
                            dot={{ r: 5, fill: "white", stroke: "var(--primary)", strokeWidth: 2 }}
                            activeDot={{ r: 6, fill: "var(--primary)" }}
                            fill="url(#gradient)"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card >
    );
}
