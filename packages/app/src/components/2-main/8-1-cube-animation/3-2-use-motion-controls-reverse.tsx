import React, { useEffect, useState } from "react";
import { useAnimate } from "motion/react";
import { PlayIcon, RotateCcwIcon } from "lucide-react";

export const ManualReverseAnimation = () => {
    const [scope, animate] = useAnimate();
    const [isReversed, setIsReversed] = useState(false);

    // Define the forward keyframes
    const forwardKeyframes = {
        x: '100%',
        rotate: 360,
        backgroundColor: "#004CFF",
    };

    // Define the reverse keyframes (swapping the initial and final states)
    const reverseKeyframes = {
        x: '-100%',
        rotate: 0,
        backgroundColor: "#B4A85A",
    };

    useEffect(() => {
        if (isReversed) {
            animate(scope.current, reverseKeyframes, { duration: .5, ease: "easeInOut" });
        } else {
            animate(scope.current, forwardKeyframes, { duration: .5, ease: "easeInOut" });
        }
    }, [isReversed, scope]);

    const toggleAnimation = () => {
        setIsReversed(!isReversed);
    };

    return (
        <div className="p-4 border border-primary-400/50 rounded-lg grid grid-rows-[1fr_auto] place-items-center">

            <div className="w-16 h-8 border border-primary-400/50 rounded-sm flex items-center 1justify-center">
                <div ref={scope} className="box size-8 bg-orange-400 rounded-sm" />
            </div>

            <div className="controls">
                <button className={buttonClasses} onClick={toggleAnimation}>
                    {isReversed ? <PlayIcon className={iconClasses} /> : <RotateCcwIcon className={iconClasses} />}
                    {isReversed ? "Play forward" : "Play reverse"}
                </button>
            </div>
        </div>
    );
};

const buttonClasses = "p-1 rounded-sm bg-primary-600 hover:bg-primary-500 text-white min-w-28 flex items-center gap-1";
const iconClasses = "size-3";

/*
    gai: 'what to use instead of deprecated LegacyAnimationControls in framer-motion'
        'is framer-motion function  useAnimationControls deprecated?' <- Yes, the useAnimationControls function has been deprecated and replaced by the useAnimate hook in Framer Motion.
            'Show me an example of useAnimate with timelines'
                'Show me how to control animation playback with useAnimate'
                    'method reverse() on controls does not exist anymore. what to use instead?'
                        'playbackRate is not public property of controls. How to play animation in reverse?'
                            'playbackRate property and reverse method are not part of latest motion library API. How to play animation in reverse?'

To reverse an animation with the useAnimate hook, you can trigger a new animation with the keyframes in the reverse order. 
A dedicated reverse() method is not provided for manually created animations. 

The key to this approach is to create a sequence of keyframes for both the forward and reverse animations and trigger them based on the desired direction. 
*/
