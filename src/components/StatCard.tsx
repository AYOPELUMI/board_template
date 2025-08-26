import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string;
    change: string;
    changeType: "positive" | "negative";
    icon: LucideIcon;
    variant?: "default" | "primary";
}

export function StatsCard({
    title,
    value,
    change,
    changeType,
    icon: Icon,
    variant = "default"
}: StatsCardProps) {
    return (
        <Card className={cn(
            "p-6 relative overflow-hidden",
            variant === "primary" && "bg-primary text-primary-foreground"
        )}>
            <div className="w-full">
                <div className="space-y-2">
                    <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        variant === "primary"
                            ? "bg-white/20 text-primary-foreground"
                            : "bg-primary/10 text-primary"
                    )}>
                        <Icon className="w-5 h-5" />
                    </div>

                    <div>
                        <p className={cn(
                            "text-sm font-medium",
                            variant === "primary"
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground"
                        )}>
                            {title}
                        </p>
                        <div className="flex items-center justify-between w-full">
                            <p className="text-3xl font-bold">{value}</p>
                            <div className={cn(
                                "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold",
                                changeType === "positive"
                                    ? "bg-green-50/80 text-green-600"
                                    : "bg-destructive/10 text-destructive",

                            )}>
                                <span>{changeType === "positive" ? "↑" : "↓"}</span>
                                {change}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    );
}