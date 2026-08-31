import { Demo_CubeAnimation } from "./3-4-animated-cube";
import { Demo_Cube_UseAnimationFrame } from "./3-5-animated-cude-with-frame";
import { Demo_Sequences } from "./3-1-use-sequence";
import { Demo_PlaybackControls } from "./3-2-use-motion-controls";
import { Demo_ManualReverse } from "./3-3-use-motion-controls-reverse";

export function CubeAnimationDemo() {
    return (
        <div className="px-4 pt-2 pb-4 mx-4 text-primary-200 bg-primary-800/30 border border-primary-400/50 rounded-lg grid place-items-center gap-y-2">
            <h3 className="text-sm">
                Motion
            </h3>

            <div className="text-xs font-normal grid grid-cols-3 gap-2">
                <Demo_CubeAnimation />
                <Demo_Cube_UseAnimationFrame />
                <div />
                <Demo_Sequences />
                <Demo_PlaybackControls />
                <Demo_ManualReverse />
            </div>
        </div>
    );
}
