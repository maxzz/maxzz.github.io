import { type ReactNode, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconCheckFrameless } from "@/components/ui/icons";

export function ButtonCopyPath({ label, text }: { label: ReactNode; text: string; }) {
    const [showNotice, setShowNotice] = useState(false);
    return (
        <button
            className="relative w-4 h-4"
            onClick={(event) => { navigator.clipboard.writeText(event.ctrlKey ? text : text.replace(/\//g, '\\')); setShowNotice(true); }}
            aria-label="Copy the project path"
        >
            <MountCopyNotice show={showNotice} setShow={setShowNotice}
                items={[
                    label,
                    <IconCheckFrameless className="w-4 h-4 text-green-100 bg-emerald-500 stroke-2 rounded-xs" />,
                ]}
            />
        </button>
    );
}

function MountCopyNotice({ show, setShow, items }: { show: boolean; setShow?: (v: boolean) => void; items: ReactNode[]; }) {
    const item = Number(show);

    return (
        <AnimatePresence initial={false}>
            <motion.div
                className="absolute left-0 top-0"
                key={item}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }}
                exit={{ scale: 0, opacity: 0, transition: { delay: 0.1, duration: 0.3, ease: "easeOut" } }}
                onAnimationComplete={() => show && setShow?.(false)}
            >
                {items[item]}
            </motion.div>
        </AnimatePresence>
    );
}
