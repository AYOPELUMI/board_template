import { Card } from "@/components/ui/Card";

const trafficData = [
    { source: "Direct", visitors: 1040, },
    { source: "Referral", visitors: 900, },
    { source: "Social Media", visitors: 500, },
];

export function TrafficSources() {
    const maxVisitors = trafficData.reduce((sum, item) => sum + item.visitors, 0);


    return (
        <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Traffic Sources</h3>



            <div className="mt-6 space-y-3">
                {trafficData.map((item) => (
                    <div key={item.source}>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">{item.source}</span>
                            <span className="text-sm font-semibold">{item.visitors.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                            <div
                                className={`h-2 rounded-full bg-primary`}
                                style={{ width: `${(item.visitors / maxVisitors) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}