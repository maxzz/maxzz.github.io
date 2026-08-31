import { useEffect, useState } from "react";
import { disableHiddenChildren } from "@/utils/disable-hidden-children";
import { motion } from "motion/react";

export function UIAccordion({ open, children }: { open: boolean, children: React.ReactNode; }) {
    const [body, setBody] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        disableHiddenChildren(open, body);
    }, [open, body]);

    return (
        <motion.div
            style={{ display: "grid" }}
            initial={false}
            animate={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            transition={{ type: "spring", mass: 0.2, stiffness: 492, damping: 26, restDelta: 0.001, restSpeed: 0.01 }}
        >
            <div ref={setBody} className="min-h-0 overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
}
