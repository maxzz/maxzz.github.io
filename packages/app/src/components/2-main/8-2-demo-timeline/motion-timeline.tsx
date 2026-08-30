import { useEffect } from "react";
import { type AnimationPlaybackControlsWithThen, type DOMKeyframesDefinition, type ElementOrSelector, type Transition, useAnimate, } from "motion/react";

export type TimelineRow = [ElementOrSelector, DOMKeyframesDefinition, (Transition | undefined)?];

export type TimelineItems = TimelineRow | TimelineItems[];

export type TimelineSource = TimelineItems[] | (() => TimelineItems[]);

export const useMotionTimeline = (allTimelineItems: TimelineSource, count: number = 1) => {
    const [scope, animate] = useAnimate();

    useEffect(
        () => {
            const timelineItems = typeof allTimelineItems === "function" ? allTimelineItems() : allTimelineItems;
            const playbacks = new Set<AnimationPlaybackControlsWithThen>();
            let cancelled = false;

            const processAnimation = async (items: TimelineItems) => {
                if (Array.isArray(items[0])) { // If list of animations, run all concurrently
                    await Promise.all(
                        (items as TimelineItems[]).map(
                            async (a) => {
                                await processAnimation(a);
                            }
                        )
                    );
                } else { // else run the single animation
                    const playback = animate(...(items as TimelineRow));
                    playbacks.add(playback);
                    try {
                        await playback;
                    } finally {
                        playbacks.delete(playback);
                    }
                }
            };

            const handleAnimate = async () => {
                for (let i = 0; i < count; i++) {
                    for (const animation of timelineItems) {
                        if (cancelled) {
                            return;
                        }
                        await processAnimation(animation);
                    }
                }
            };

            handleAnimate();

            return () => {
                cancelled = true;
                playbacks.forEach((playback) => playback.stop());
                playbacks.clear();
            };
        },
        [allTimelineItems, count, animate]
    );

    return scope;
};
