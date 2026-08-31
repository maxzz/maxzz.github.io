import { useCallback, useEffect, useState } from "react";
import { useAnimate, stagger } from "motion/react";
import { classNames } from "@/utils/classnames";
import { buttonAnimatingClasses, frameClasses, iconClasses } from "./8-shared-controls";
import { PlayIcon } from "lucide-react";

export function Demo_Sequences() {
    const [trigger, setTrigger] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleStartAnimation = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTrigger(true);
        }
    };

    const handleAnimationComplete = useCallback(() => {
        setIsAnimating(false);
        setTrigger(false);
    }, []);

    return (
        <div className={classNames(frameClasses, "grid grid-rows-[auto_1fr_auto] place-items-center gap-y-1")}>
            <h3>
                Sequences
            </h3>

            <div className="p-1">
                <ListAnimation trigger={trigger} onAnimationComplete={handleAnimationComplete} />
            </div>

            <button className={buttonAnimatingClasses(isAnimating)} onClick={handleStartAnimation} disabled={isAnimating} type="button">
                {!isAnimating && <PlayIcon className={iconClasses} />}
                {isAnimating
                    ? 'Playing ...'
                    : 'Play animation'
                }
            </button>
        </div>
    );
}

function ListAnimation({ trigger, onAnimationComplete }: { trigger: boolean, onAnimationComplete?: () => void; }) {
    // 1. Get the `scope` and `animate` function from useAnimate
    const [scope, animate] = useAnimate();

    useEffect(
        () => {
            // 3. Call the animate function with a sequence
            //    The async function ensures that each animation step completes before the next one starts
            async function sequence() {

                // // 1. version 1
                // // Step 1: Animate the list title
                // await animate("h1", { opacity: 1, y: [0, 100, -100, 0] }, { duration: 0.5 });
                // // Step 2: Animate the list items with a stagger effect
                // await animate("li", { opacity: 1, x: [-100, 0] }, { delay: staggerItems1 });

                // 2. version 2

                await animate("h1", { opacity: 1, scaleX: 1 }, { duration: 1 });

                await Promise.all([
                    animate("h1", { opacity: 1, y: [0, 100, -100, 0] }, { duration: 1.5 }),
                    animate("li", { opacity: 1, x: [-100, 0] }, { delay: staggerItems2 }),
                ]);

                await animate("h1", { opacity: 1, scaleX: 0 }, { duration: 1.5 });

                // 3. done

                onAnimationComplete?.();
            }

            if (trigger) {
                sequence();
            }
        },
        [trigger]);

    return (
        // 2. Attach the scope ref to the parent element
        <div className="p-8 border border-primary-400/50 rounded-lg overflow-hidden">
            <div ref={scope}>
                <h1 className="list-title">Loading...</h1>

                <ul className="list">
                    <li className="list-item">One</li>
                    <li className="list-item">Two</li>
                    <li className="list-item">Three</li>
                </ul>
            </div>
        </div>
    );
}

const staggerItems1 = stagger(0.1, { startDelay: 0.25 });
const staggerItems2 = stagger(0.1, { startDelay: 1.25 });

// gai: 'what to use instead of deprecated LegacyAnimationControls in framer-motion'
// 	'is framer-motion function  useAnimationControls deprecated?' <- Yes, the useAnimationControls function has been deprecated and replaced by the useAnimate hook in Framer Motion.
// 		'Show me an example of useAnimate with timelines'

/*
Here's a breakdown of the syntax:
    animate([ [target, keyframes, options], [target, keyframes, options] ])
        target: The element to animate, either the scope ref or a CSS selector like 'h1', 'li', etc..
        keyframes: The animation properties, which can be a series of keyframes in an array (e.g., { x: [0, 100, 0] }).
        options: Additional animation settings such as duration, ease, and delay.
*/
