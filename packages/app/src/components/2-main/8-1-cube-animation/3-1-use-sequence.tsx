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
    const [scope, animate] = useAnimate();
    const [step, setStep] = useState(0);

    useEffect(
        () => {
            async function sequence() {
                setStep(1);
                await sequenceA(animate);
                setStep(2);
                await sequenceB(animate);
                setStep(3);
                await sequenceC(animate);
                setStep(0);

                onAnimationComplete?.();
            }

            if (trigger) {
                sequence();
            }
        },
        [trigger]);

    return (
        <div className="px-4 py-2 border border-primary-400/50 rounded-lg overflow-hidden grid grid-rows-[auto_1fr] gap-y-4">
            <div className="text-[0.65rem] font-light text-center text-primary-400">Step {step}</div>

            <div ref={scope}>
                <h1 className="text-sky-500">Loading...</h1>

                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </div>
        </div>
    );
}

//---------------------------------------------------------------------------

type AnimateFn = ReturnType<typeof useAnimate>[1];

async function sequenceA(animate: AnimateFn) {
    await animate("h1", { opacity: 1, scaleX: 1 }, { duration: 1 });

    await Promise.all([
        animate("h1", { opacity: 1, y: [0, 100, -100, 0] }, { duration: 1.5 }),
        animate("li", { opacity: 1, x: [-100, 0] }, { delay: staggerItems2 }),
    ]);

    await animate("h1", { opacity: 1, scaleX: 0 }, { duration: 1.5 });
}

async function sequenceB(animate: AnimateFn) {
    await animate("h1", { opacity: 1, scaleX: 1 }, { duration: 1 });
    await animate("h1", { opacity: 1, y: [0, 100, -100, 0] }, { duration: 1.5 });
    await animate("li", { opacity: 1, x: [-100, 0] }, { delay: staggerItems2 });
    await animate("h1", { opacity: 1, scaleX: 0 }, { duration: 1.5 });
}

async function sequenceC(animate: AnimateFn) {
    await animate("h1", { opacity: 1, y: [0, 100, -100, 0] }, { duration: 0.5 });
    await animate("li", { opacity: 1, x: [-100, 0] }, { delay: staggerItems1 });
}

const staggerItems1 = stagger(0.1, { startDelay: 0.25 });
const staggerItems2 = stagger(0.1, { startDelay: 1.25 });

//---------------------------------------------------------------------------

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
