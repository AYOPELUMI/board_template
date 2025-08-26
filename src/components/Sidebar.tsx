"use client"
import {
    LayoutDashboard,
    TrendingUp,
    ShoppingBag,
    Package,
    Users,
    UserCheck,
    BarChart3,
    Settings,
    LogOut,
    Menu,
    X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-primary text-primary-foreground"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar */}
            <div
                className={cn(
                    "fixed lg:static top-0 left-0 h-full bg-white border-r border-sidebar-border flex flex-col transition-all duration-300 z-40",
                    isCollapsed ? "w-20" : "w-64",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                    className
                )}
            >
                {/* Logo */}
                <div className="p-6 border-b border-sidebar-border flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
                    </div>
                    {!isCollapsed && (
                        <span className="text-xl font-bold text-foreground">Goboard</span>
                    )}
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
                                {!isCollapsed && <span>{item.label}</span>}
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
                        {!isCollapsed && "Setting"}
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-active-bg hover:text-sidebar-active transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        {!isCollapsed && "Log Out"}
                    </a>
                </div>

                {/* Collapse Button (Desktop only) */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="hidden lg:flex items-center justify-center p-2 border-t border-sidebar-border hover:bg-sidebar-active-bg"
                >
                    {isCollapsed ? "→" : "←"}
                </button>
            </div>

            {/* Overlay for mobile */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
}
