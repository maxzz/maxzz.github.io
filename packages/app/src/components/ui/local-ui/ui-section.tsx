import { type ReactNode } from "react";
import { type PrimitiveAtom, useAtom } from "jotai";
import { classNames } from "@/utils";
import { UIAccordion } from "./ui-accordion";
import { UISectionPane } from "./ui-section-pane";

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
