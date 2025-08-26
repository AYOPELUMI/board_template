import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: {
        label?: string
        items: { value: string; label: string; disabled?: boolean }[]
    }[]
    placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, options, placeholder, ...props }, ref) => {
        return (
            <div className="relative w-fit">
                <select
                    ref={ref}
                    className={cn(
                        "peer flex h-10 w-fit appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled selected hidden>
                            {placeholder}
                        </option>
                    )}

                    {options.map((group, i) =>
                        group.label ? (
                            <optgroup key={i} label={group.label}>
                                {group.items.map((item) => (
                                    <option key={item.value} value={item.value} disabled={item.disabled} className={cn(
                                        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
                                        className
                                    )}>
                                        {item.label}
                                    </option>
                                ))}
                            </optgroup>
                        ) : (
                            group.items.map((item) => (
                                <option key={item.value} value={item.value} disabled={item.disabled}>
                                    {item.label}
                                </option>
                            ))
                        )
                    )}
                </select>

                {/* Custom dropdown icon */}
                <ChevronDown className="text-foreground pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50 peer-disabled:opacity-30" />
            </div>
        )
    }
)
Select.displayName = "Select"

export { Select }
