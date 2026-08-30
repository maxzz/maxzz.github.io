import { useEffect, useRef } from "react";
import { type DOMKeyframesDefinition, type ElementOrSelector, type Transition, useAnimate, } from "motion/react";

export type AnimateParams = [ElementOrSelector, DOMKeyframesDefinition, (Transition | undefined)?];

export type Animation = AnimateParams | Animation[];

export const useMotionTimeline = (keyframes: Animation[], count: number = 1) => {
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

    const processAnimation = async (animation: Animation) => {
        // If list of animations, run all concurrently
        if (Array.isArray(animation[0])) {
            await Promise.all(
                animation.map(async (a) => {
                    await processAnimation(a as Animation);
                })
            );
        } else {
            // Else run the single animation
            await animate(...(animation as AnimateParams));
        }
    };

    const handleAnimate = async () => {
        for (let i = 0; i < count; i++) {
            for (const animation of keyframes) {
                if (!mounted.current) return;
                await processAnimation(animation);
            }
        }
    };

    return scope;
};
