import {
    LayoutDashboard,
    TrendingUp,
    ShoppingBag,
    Package,
    Users,
    UserCheck,
    BarChart3,
    Settings,
    LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
    className?: string;
}

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: TrendingUp, label: "Performance" },
    { icon: ShoppingBag, label: "Orders" },
    { icon: Package, label: "Product" },
    { icon: UserCheck, label: "Agents" },
    { icon: Users, label: "Customers" },
    { icon: BarChart3, label: "Reports" },
];

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn("w-64 bg-white border-r border-sidebar-border flex flex-col", className)}>
            {/* Logo */}
            <div className="p-6 border-b border-sidebar-border">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">Goboard</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-4">
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                item.active
                                    ? "bg-sidebar-active-bg text-sidebar-active"
                                    : "text-sidebar-foreground hover:bg-sidebar-active-bg hover:text-sidebar-active"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-sidebar-border space-y-2">
                <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-active-bg hover:text-sidebar-active transition-colors"
                >
                    <Settings className="w-5 h-5" />
                    Setting
                </a>
                <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-active-bg hover:text-sidebar-active transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Log Out
                </a>
            </div>
        </div>
    );
}