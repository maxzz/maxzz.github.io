import { useCallback, useState } from "react";
import { CubeAnimationDemo1 } from "./1-1-animated-cube";
import { UseAnimationFrame } from "./1-2-animated-cude-with-frame";
import { ListAnimation } from "./3-0-use-motion-list-animation";
import { PlaybackControls } from "./3-1-use-motion-controls";
import { ManualReverseAnimation } from "./3-2-use-motion-controls-reverse";

export function CubeAnimationDemo() {
    return (
        <div className="px-4 py-2 mx-4 bg-primary-800/30 border border-primary-400/50 rounded-lg grid place-items-center gap-y-2">

            <h3 className="text-sm text-primary-200">
                Motion
            </h3>

            <div className="text-xs font-normal grid grid-cols-3 gap-2">

                <TriggerAnimationDemo />

                <PlaybackControls />

                <ManualReverseAnimation />

                <UseAnimationFrame />

                <CubeAnimationDemo1 />
            </div>

        </div>
    );
}

function TriggerAnimationDemo() {
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
        <div className="text-xs font-normal p-1 border border-primary-400/50 rounded-lg grid grid-rows-[auto_1fr_auto] place-items-center gap-y-1">

            <h3 className="text-primary-200">
                Animated Cube Demo
            </h3>

            <div className="p-1">
                <ListAnimation trigger={trigger} onAnimationComplete={handleAnimationComplete} />
            </div>

            <button
                onClick={handleStartAnimation}
                disabled={isAnimating}
                type="button"
                className={`
                            px-3 py-2.5 text-sm rounded-sm transition-all duration-200
                            ${isAnimating
                        ? 'bg-primary-600/50 text-primary-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-500 text-white cursor-pointer'}
                        `}
            >
                {isAnimating
                    ? 'Playing Animation...'
                    : 'Play Cube Animation'
                }
            </button>
        </div>
    );
}