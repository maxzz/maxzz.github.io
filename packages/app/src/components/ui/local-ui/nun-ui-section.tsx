import { type HTMLAttributes, type ReactNode } from "react";
import { type PrimitiveAtom, useAtom } from "jotai";
import { classNames } from "@/utils";
import { UIAccordion } from "./ui-accordion";
import { UIArrow } from "./ui-accordion-arrow";

export function UISection({ className, title, children, openAtom }: { className?: string; title: ReactNode; children: ReactNode; openAtom: PrimitiveAtom<boolean>; }) {
    const [open, setOpen] = useAtom(openAtom);

    return (
        <div>
            <UISectionPane className={classNames(baseClasses, className)} style={textShadow} open={open} onClick={() => setOpen(v => !v)}>
                {title}
            </UISectionPane>
            
            <UIAccordion open={open}>
                {children}
            </UIAccordion>
        </div>
    );
}

const baseClasses = "pl-4 px-2 py-2 bg-title4 text-stone-100 uppercase rounded-sm flex items-center justify-between select-none cursor-pointer font-ui";

export const textShadow = { textShadow: '1px 1px 2px #000' };

// 

function UISectionPane({ className, children, open = true, ...rest }: { open?: boolean; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames(base2Classes, className)} {...rest}>
            {/* Section name */}
            {children}
            
            {/* Open/Close icon */}
            <UIArrow open={open} className="p-1 pb-0 w-6 h-6" />
        </div>
    );
}

const base2Classes = "px-2 py-1 bg-slate-500 text-stone-100 uppercase flex items-center justify-between select-none cursor-pointer font-ui";
