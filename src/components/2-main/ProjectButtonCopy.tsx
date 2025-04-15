import { ReactNode, useState } from "react";
import { a, easings, useTransition } from "@react-spring/web";
import { IconCheckFrameless } from "../ui";

function MountCopyNotice({ show, setShow, items }: { show: boolean; setShow?: (v: boolean) => void; items: ReactNode[]; }) {
    const transitions = useTransition(Number(show), {
        from: { scale: 0, opacity: 0, },
        enter: { scale: 1, opacity: 1, },
        leave: { scale: 0, opacity: 0, delay: 100, config: { duration: 300, easing: easings.easeOutQuad }, },
        onRest: ({ finished }) => show && finished && setShow?.(false),
    });
    return transitions((styles, item) => <a.div style={styles} className="absolute left-0 top-0"> {items[item]} </a.div>);
}

export function ButtonCopy({ label, text }: { label: ReactNode; text: string; }) {
    const [showNotice, setShowNotice] = useState(false);
    return (
        <button
            className="relative w-4 h-4"
            onClick={(event) => {
                navigator.clipboard.writeText(event.ctrlKey ? text : text.replace(/\//g, '\\'));
                setShowNotice(true);
            }}
            aria-label="Copy the project path"
        >
            <MountCopyNotice show={showNotice} setShow={setShowNotice} items={[
                label,
                <IconCheckFrameless className="w-4 h-4 text-green-100 bg-emerald-500 stroke-[2] rounded-sm" />,
            ]} />
        </button>
    );
}
