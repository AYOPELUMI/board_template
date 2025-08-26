"use client"
import { Button } from "@/components/ui/Button";
import { Download, FileDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
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

export function SalesChart() {
    return (
        <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Sales Report</h3>
                <Button variant="default" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Export to PDF
                </Button>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                        />
                        <YAxis hide />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="hsl(var(--primary))"
                            strokeWidth={3}
                            dot={false}
                            fill="url(#gradient)"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}