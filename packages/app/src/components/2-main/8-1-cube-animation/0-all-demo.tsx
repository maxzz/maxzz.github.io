import { CubeAnimationDemo1 } from "./1-1-animated-cube";
import { UseAnimationFrame } from "./1-2-animated-cude-with-frame";
import { Demo_ListAnimation } from "./3-0-use-motion-list-animation";
import { PlaybackControls } from "./3-1-use-motion-controls";
import { ManualReverseAnimation } from "./3-2-use-motion-controls-reverse";

export function CubeAnimationDemo() {
    return (
        <div className="px-4 py-2 mx-4 text-primary-200 bg-primary-800/30 border border-primary-400/50 rounded-lg grid place-items-center gap-y-2">
            <h3 className="text-sm">
                Motion
            </h3>

            <div className="text-xs font-normal grid grid-cols-3 gap-2">
                <Demo_ListAnimation />
                <PlaybackControls />
                <ManualReverseAnimation />
                <UseAnimationFrame />
                <CubeAnimationDemo1 />
            </div>
        </div>
    );
}
