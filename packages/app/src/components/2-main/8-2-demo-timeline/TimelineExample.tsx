import { type Transition } from "motion/react";
import { type TimelineItems, useMotionTimeline } from "./motion-timeline";

export const TimelineExample = () => {
    const scope = useMotionTimeline(TIMELINE_ITEMS, Infinity);

    return (
        <div ref={scope} className="flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 bg-grid-zinc-900">
            <div className="bar-1 bg-white" style={{ width: 48, height: 96, }} />
            <div className="bar-2 bg-white" style={{ width: 48, height: 96, }} />
            <div className="bar-3 bg-white" style={{ width: 48, height: 96, }} />
        </div>
    );
};

const TRANSITION: Transition = { ease: "easeInOut", duration: 0.5, };

const TIMELINE_ITEMS: TimelineItems[] = [
    [".bar-2", { height: 48 }, TRANSITION],
    [
        [".bar-1", { x: -24 }, TRANSITION],
        [".bar-3", { x: 24 }, TRANSITION],
    ],
    [
        [".bar-1", { height: 48, rotate: 90 }, TRANSITION],
        [".bar-3", { height: 48, rotate: -90 }, TRANSITION],
    ],
    [
        [".bar-1", { x: 48 }, TRANSITION],
        [".bar-3", { x: -48 }, TRANSITION],
    ],
    [
        [".bar-1", { rotate: 120, background: "#059669" }, TRANSITION],
        [".bar-2", { rotate: -120, background: "#34d399" }, TRANSITION],
        [".bar-3", { rotate: 90 }, TRANSITION],
    ],
    [
        [".bar-1", { rotate: 0, x: 0, height: 96, background: "#1FFFFF" }, { ...TRANSITION, delay: 2 },],
        [".bar-2", { rotate: 0,  /**/ height: 96, background: "#1FFFFF" }, { ...TRANSITION, delay: 2 },],
        [".bar-3", { rotate: 0, x: 0, height: 96, background: "#1FFFFF" }, { ...TRANSITION, delay: 2 },],
    ],
];
