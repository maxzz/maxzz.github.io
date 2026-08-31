import { useEffect, useRef } from "react";
import { type DOMKeyframesDefinition, type ElementOrSelector, type Transition, useAnimate, } from "motion/react";

export type TimelineRow = [ElementOrSelector, DOMKeyframesDefinition, (Transition | undefined)?];

export type TimelineItems = TimelineRow | TimelineItems[];

export const useMotionTimeline = (allTimelineItems: TimelineItems[], count: number = 1) => {
    const mounted = useRef(true);

    const [scope, animate] = useAnimate();

    useEffect(
        () => {
            mounted.current = true;

            handleAnimate();

            return () => {
                mounted.current = false;
            };
        },
        []);

    const processAnimation = async (timelineItems: TimelineItems) => {
        if (Array.isArray(timelineItems[0])) { // If list of animations, run all concurrently
            await Promise.all(
                timelineItems.map(
                    async (a) => {
                        await processAnimation(a as TimelineItems);
                    }
                )
            );
        } else { // else run the single animation
            await animate(...(timelineItems as TimelineRow));
        }
    };

    const handleAnimate = async () => {
        for (let i = 0; i < count; i++) {
            for (const animation of allTimelineItems) {
                if (!mounted.current) {
                    return;
                }
                await processAnimation(animation);
            }
        }
    };

    return scope;
};

export type AnimateFn = ReturnType<typeof useAnimate>[1];