import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { ChevronRight } from "lucide-react";

const customers = [
    {
        name: "Elijah Anderson",
        email: "elijah@company.com",
        initials: "EA"
    },
    {
        name: "Ava Parker",
        email: "parker@loveinipsum.com",
        initials: "AP"
    }
];

export function RecentCustomers() {
    return (<>
        <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Customers</h3>

            </div>

            <div className="space-y-4">
                {customers.map((customer) => (
                    <div key={customer.email} className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                                {customer.initials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-foreground truncate">
                                {customer.name}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                                {customer.email}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover font-bold mt-1">
                See More <ChevronRight className="w-4 h-4 ml-1 text-primary font-bold" />
            </Button>
        </Card>
        {/* Promotional Card */}
        <Card className="p-6 mt-6">                <h4 className="font-semibold text-foreground mb-2">The Unique Power of One</h4>
            <p className="text-sm text-muted-foreground mb-3">
                With just one contact system invoice, we aim to help simplify you Work.
            </p>
            <Button size="sm" className="w-full bg-sidebar-active-bg text-sidebar-active font-bold hover:bg-sidebar-active hover:text-sidebar-active-bg">
                Create Invoice
            </Button>

        </Card >
    </>
    );
}