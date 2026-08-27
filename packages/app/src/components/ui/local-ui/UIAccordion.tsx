import { useState } from "react";
import useMeasure from "@/utils/hooks/useMeasure";
import { a, config, useSpring } from "@react-spring/web";
import { disableHiddenChildren } from "@/utils";

export function UIAccordion({ open, children }: { open: boolean, children: React.ReactNode; }) {
    const [refFn, { height, top }] = useMeasure<HTMLDivElement>();
    const [refEl, setEl] = useState<HTMLDivElement>();
    const [firstRun, setFirstRun] = useState(true);
    const animation = useSpring({
        overflow: "hidden",
        height: open ? height + top : 0,
        ena: disableHiddenChildren(open, refEl),
        config: firstRun ? { duration: 0 } : { mass: 0.2, tension: 492, clamp: true },
        onRest: () => firstRun && setFirstRun(false),
    });
    return (
        <a.div style={animation}>
            <div ref={(el) => { el && (setEl(el), refFn(el)); }}>
                {children}
            </div>
        </a.div>
    );
}
