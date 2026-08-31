import React, { useEffect, useState } from "react";
import { type AnimationPlaybackControlsWithThen, useAnimate, type ValueAnimationTransition } from "motion/react";
import { a } from "@react-spring/web";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { classNames } from "@/utils/classnames";
import { buttonClasses, frameClasses, iconClasses } from "./8-shared-controls";

export const Demo_PlaybackControls = () => {
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
        <div className={classNames(frameClasses, "grid grid-rows-[auto_1fr_auto] place-items-center")}>
            <h3>
                Playback Controls
            </h3>

            <div ref={scope} className="box m-4 size-10 bg-green-700 rounded-sm" />

            <div className="controls flex gap-2">
                <button className={buttonClasses} onClick={handlePlay} title="Play"><PlayIcon className={iconClasses} /></button>
                <button className={buttonClasses} onClick={handlePause} title="Pause"><PauseIcon className={iconClasses} /></button>
                <button className={buttonClasses} onClick={handleReverse} title="Reverse"><RotateCcwIcon className={iconClasses} /></button>
            </div>
        </div>
    );
};
