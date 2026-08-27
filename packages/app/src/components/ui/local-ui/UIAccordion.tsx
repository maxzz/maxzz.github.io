import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { disableHiddenChildren } from "@/utils";

export function UIAccordion({ open, children }: { open: boolean, children: React.ReactNode; }) {
    const [refEl, setEl] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        disableHiddenChildren(open, refEl);
    }, [open, refEl]);

    return (
        <motion.div
            initial={false}
            animate={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            transition={{ type: "spring", mass: 0.2, stiffness: 492, damping: 26, restDelta: 0.001, restSpeed: 0.01 }}
            style={{ display: "grid" }}
        >
            <div ref={setEl} className="min-h-0 overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
}
