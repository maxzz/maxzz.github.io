import { useCallback, useState } from "react";
import { AnimatedCube } from "./1-animated-cube";
import { UseAnimationFrame } from "./2-animated-cude2";
import { ListAnimation } from "./3-0-use-motion";
import { PlaybackControls } from "./3-1-use-motion-controls";
import { ManualReverseAnimation } from "./3-2-use-motion-controls-reverse";

export function CubeAnimationDemo() {
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
        <div className="mx-4 w-full max-w-xl">
            <div className="p-4 bg-primary-800/30 border border-primary-400/50 rounded-lg">

                <div className="flex flex-col items-center gap-8">

                    <h3 className="text-sm text-primary-200">
                        Animated Cube Demo
                    </h3>

                    <div className="p-8 flex items-center justify-center">
                        {/* <UseAnimationFrame /> */}

                        <ListAnimation
                            trigger={trigger}
                            onAnimationComplete={handleAnimationComplete}
                        />

                        <PlaybackControls />

                        <ManualReverseAnimation />

                        {/* <AnimatedCube
                            trigger={trigger}
                            onAnimationComplete={handleAnimationComplete}
                        /> */}
                    </div>

                    <button
                        onClick={handleStartAnimation}
                        disabled={isAnimating}
                        type="button"
                        className={`
                            px-3 py-2.5 text-sm rounded transition-all duration-200
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

            </div>
        </div>
    );
}
