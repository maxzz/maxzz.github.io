import React, { useEffect, useState } from "react";
import { type AnimationPlaybackControlsWithThen, useAnimate, type ValueAnimationTransition } from "motion/react";
import { a } from "@react-spring/web";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";

export const PlaybackControls = () => {
    // `scope` allows us to reference a DOM element
    // `animate` is the function to trigger animations
    const [scope, animate] = useAnimate();

    // State to hold the animation controls object
    const [controls, setControls] = useState<AnimationPlaybackControlsWithThen | null>(null);

    // Define the animation keyframes
    const keyframes = {
        x: [0, 100], // Move from 0 to 100px on the x-axis
        rotate: [0, 360], // Rotate 360 degrees
    };

    // Define animation options
    const options: ValueAnimationTransition<string> = {
        duration: 3,
        ease: "easeInOut",
    };

    // Run the animation once when the component mounts
    useEffect(() => {
        // Calling `animate` returns the animation controls object
        const animation = animate(scope.current, keyframes, options);
        animation.pause();
        setControls(animation);
    }, []);

    const handlePlay = () => {
        if (controls) {
            controls.speed = 9;
            controls.play();
        }
    };

    const handlePause = () => {
        if (controls) {
            controls.pause();
        }
    };

    const handleReverse = () => {
        if (controls) {
            // controls.reverse();
            // controls.playbackRate = -1;
            // controls.startTime = 0; // this is only getter
            // controls.time = 0;
            
            controls.speed = -9;
            controls.play();
        }
    };

    return (
        <div className="p-4 border border-primary-400/50 rounded-lg grid grid-rows-[1fr_auto] place-items-center">
            <div ref={scope} className="box m-4 size-8 bg-green-700"></div>
            <div className="controls flex gap-2">
                <button className={buttonClasses} onClick={handlePlay} title="Play"><PlayIcon className={iconClasses} /></button>
                <button className={buttonClasses} onClick={handlePause} title="Pause"><PauseIcon className={iconClasses} /></button>
                <button className={buttonClasses} onClick={handleReverse} title="Reverse"><RotateCcwIcon className={iconClasses} /></button>
            </div>
        </div>
    );
};

const buttonClasses = "p-1 rounded-sm bg-primary-600 hover:bg-primary-500 text-white";
const iconClasses = "size-3";
