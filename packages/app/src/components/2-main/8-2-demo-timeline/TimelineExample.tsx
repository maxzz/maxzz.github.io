import { type Transition } from "motion/react";
import { type TimelineItems, useMotionTimeline } from "@/utils/motion-timeline";

export const TimelineExample = () => {
    const scope = useMotionTimeline(TIMELINE_ITEMS, Infinity);

    return (
        <div ref={scope} className="mx-4 h-32 bg-zinc-950 bg-grid-zinc-900 border border-primary-400/50 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="bar-1 bg-white" style={{ width: width, height: heightFull, }} />
            <div className="bar-2 bg-white" style={{ width: width, height: heightFull, }} />
            <div className="bar-3 bg-white" style={{ width: width, height: heightFull, }} />
        </div>
    );
};

const TRANSITION: Transition = { ease: "easeInOut", duration: 0.5, };

const width = 48;
const heightHalf = 48;
const heightFull = 96;

const TIMELINE_ITEMS: TimelineItems[] = [
    [".bar-2", { height: heightHalf }, TRANSITION],
    [
        [".bar-1", { x: -width / 2 }, TRANSITION],
        [".bar-3", { x: width / 2 }, TRANSITION],
    ],
    [
        [".bar-1", { height: heightHalf, rotate: 90 }, TRANSITION],
        [".bar-3", { height: heightHalf, rotate: -90 }, TRANSITION],
    ],
    [
        [".bar-1", { x: width }, TRANSITION],
        [".bar-3", { x: -width }, TRANSITION],
    ],
    [
        [".bar-1", { rotate: 120, background: "#059669" }, TRANSITION],
        [".bar-2", { rotate: -120, background: "#34d399" }, TRANSITION],
        [".bar-3", { rotate: 90 }, TRANSITION],
    ],
    [
        [".bar-1", { rotate: 0, x: 0, height: heightFull, background: "#1FFFFF" }, { ...TRANSITION, delay: 2 },],
        [".bar-2", { rotate: 0,  /**/ height: heightFull, background: "#1FFFFF" }, { ...TRANSITION, delay: 2 },],
        [".bar-3", { rotate: 0, x: 0, height: heightFull, background: "#1FFFFF" }, { ...TRANSITION, delay: 2 },],
    ],
    [
        [".bar-1", { rotate: 0, x: 0, height: heightFull, background: "#FFFFFF" }, { ...TRANSITION, delay: 2 },],
        [".bar-2", { rotate: 0,  /**/ height: heightFull, background: "#FFFFFF" }, { ...TRANSITION, delay: 2 },],
        [".bar-3", { rotate: 0, x: 0, height: heightFull, background: "#FFFFFF" }, { ...TRANSITION, delay: 2 },],
    ],
];
