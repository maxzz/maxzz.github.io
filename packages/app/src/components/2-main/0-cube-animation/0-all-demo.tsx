import { useState } from "react";
import { AnimatedCube } from "./1-animated-cube";

export function CubeAnimationDemo() {
    const [trigger, setTrigger] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleStartAnimation = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTrigger(true);
        }
    };

    const handleAnimationComplete = () => {
        setIsAnimating(false);
        setTrigger(false);
    };

    return (
        <div className="w-full px-4 max-w-[96rem] mb-8">
            <div className="bg-primary-800/30 border border-primary-400/50 rounded-lg p-6">
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-primary-200">
                        Animated Cube Demo
                    </h3>

                    <AnimatedCube
                        trigger={trigger}
                        onAnimationComplete={handleAnimationComplete} />

                    <button
                        onClick={handleStartAnimation}
                        disabled={isAnimating}
                        className={`
                            px-6 py-3 rounded-lg font-medium transition-all duration-200
                            ${isAnimating
                                ? 'bg-primary-600/50 text-primary-400 cursor-not-allowed'
                                : 'bg-primary-600 hover:bg-primary-500 text-white cursor-pointer'}
                        `}
                    >
                        {isAnimating ? 'Playing Animation...' : 'Play Cube Animation'}
                    </button>
                </div>
            </div>
        </div>
    );
}
