import React, { useEffect, useState } from "react";
import { useAnimate } from "motion/react";

export const ManualReverseAnimation = () => {
    const [scope, animate] = useAnimate();
    const [isReversed, setIsReversed] = useState(false);

    // Define the forward keyframes
    const forwardKeyframes = {
        x: 100,
        rotate: 360,
        backgroundColor: "#ff0088",
    };

    // Define the reverse keyframes (swapping the initial and final states)
    const reverseKeyframes = {
        x: 0,
        rotate: 0,
        backgroundColor: "#005e5e",
    };

    useEffect(() => {
        if (isReversed) {
            animate(scope.current, reverseKeyframes, { duration: 1, ease: "easeInOut" });
        } else {
            animate(scope.current, forwardKeyframes, { duration: 1, ease: "easeInOut" });
        }
    }, [isReversed, scope]);

    const toggleAnimation = () => {
        setIsReversed(!isReversed);
    };

    return (
        <div className="border border-primary-400/50 rounded-lg">
            <div ref={scope} className="box size-8 bg-orange-400" />
            <div className="controls">
                <button className="min-w-24" onClick={toggleAnimation}>
                    {isReversed ? "Play Forward" : "Play Reverse"}
                </button>
            </div>
        </div>
    );
};

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