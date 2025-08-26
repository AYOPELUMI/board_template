import { Search, Plus, Bell, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { Select } from "@/components/ui/Select";

export function Header() {
    return (
        <header className="bg-card border-b border-border px-6 py-5">
            <div className="flex items-center justify-between">
                {/* Search */}
                <div className="flex items-center gap-4 flex-1 max-w-md">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search..."
                            className="pl-10 bg-background"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="relative bg-secondary rounded-full">
                        <MessageCircle className="w-5 h-5" />
                    </Button>

                    <Button variant="ghost" size="icon" className="relative bg-secondary rounded-full">
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
                    </Button>

                    <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                            O
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}