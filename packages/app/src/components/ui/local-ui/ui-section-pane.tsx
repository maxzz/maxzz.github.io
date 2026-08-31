import { type HTMLAttributes } from "react";
import { classNames } from "@/utils/classnames";
import { UIArrow } from "./ui-accordion-arrow";

export function UISectionPane({ className, children, open = true, ...rest }: { open?: boolean; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames(baseClasses, className)} {...rest}>
            {/* Section name */}
            {children}
            
            {/* Open/Close icon */}
            <UIArrow open={open} className="w-6 h-6 p-1 pb-0 " />
        </div>
    );
}

const baseClasses = "px-2 py-1 bg-slate-500 text-stone-100 uppercase flex items-center justify-between select-none cursor-pointer font-ui";
