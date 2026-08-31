import { useCallback, useEffect, useState } from "react";
import { classNames } from "@/utils";
import { type LegacyAnimationControls, type Transition, motion, useAnimation } from "motion/react";
import { buttonAnimatingClasses, frameClasses } from "./8-shared-controls";

export function Demo_CubeAnimation() {
    const [trigger, setTrigger] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleStartAnimation = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTrigger(true);
        }
    };

    const handleAnimationComplete = useCallback(
        () => {
            setIsAnimating(false);
            setTrigger(false);
        },
        []);

    return (

        <div className={classNames(frameClasses, "grid grid-rows-[auto_1fr_auto] place-items-center")}>
            <h3>
                Cube (scale 50%)
            </h3>

            <AnimatedCube trigger={trigger} onAnimationComplete={handleAnimationComplete} />

            <button className={buttonAnimatingClasses(isAnimating)} onClick={handleStartAnimation} disabled={isAnimating} type="button">
                {isAnimating
                    ? 'Playing Animation...'
                    : 'Play Cube Animation'
                }
            </button>
        </div >
    );
}

function AnimatedCube({ trigger, onAnimationComplete }: { trigger: boolean; onAnimationComplete?: () => void; }) {
    const cubeControls = useAnimation();

    const sideControls: SideControls = {
        front: useAnimation(),
        back: useAnimation(),
        left: useAnimation(),
        right: useAnimation(),
        top: useAnimation(),
        bottom: useAnimation(),
    };

    useEffect(
        () => {
            if (trigger) {
                playAnimation(cubeControls, sideControls, onAnimationComplete);
            }
        },
        [trigger]);

    return (
        <div className="relative size-32 scale-50 cube-perspective">
            <motion.div className="relative w-full h-full cube-3d" animate={cubeControls} initial={{ rotateX: -15, rotateY: 45 }}>
                <motion.div animate={sideControls.front}  /**/ className={classNames(sideClasses, "bg-red-500 border-2 border-red-600")}       /* Front face  */ style={{ transform: 'translateZ(64px)', }}>Front</motion.div>
                <motion.div animate={sideControls.back}   /**/ className={classNames(sideClasses, "bg-blue-500 border-2 border-blue-600")}     /* Back face   */ style={{ transform: 'translateZ(-64px) rotateY(180deg)', }}>Back</motion.div>
                <motion.div animate={sideControls.left}   /**/ className={classNames(sideClasses, "bg-green-500 border-2 border-green-600")}   /* Left face   */ style={{ transform: 'rotateY(-90deg) translateZ(64px)', }}>Left</motion.div>
                <motion.div animate={sideControls.right}  /**/ className={classNames(sideClasses, "bg-yellow-500 border-2 border-yellow-600")} /* Right face  */ style={{ transform: 'rotateY(90deg) translateZ(64px)', }}>Right</motion.div>
                <motion.div animate={sideControls.top}    /**/ className={classNames(sideClasses, "bg-purple-500 border-2 border-purple-600")} /* Top face    */ style={{ transform: 'rotateX(90deg) translateZ(64px)', }}>Top</motion.div>
                <motion.div animate={sideControls.bottom} /**/ className={classNames(sideClasses, "bg-orange-500 border-2 border-orange-600")} /* Bottom face */ style={{ transform: 'rotateX(-90deg) translateZ(64px)', }}>Bottom</motion.div>
            </motion.div>
        </div>
    );
}

const transitionOut: Transition = { duration: 0.5, ease: "easeOut", };
const transitionIn: Transition = { duration: 0.5, ease: "easeInOut", };

const sideClasses = "absolute size-full text-white font-bold flex items-center justify-center";

type AnimationControls = LegacyAnimationControls;

type SideControls = {
    front: AnimationControls;
    back: AnimationControls;
    left: AnimationControls;
    right: AnimationControls;
    top: AnimationControls;
    bottom: AnimationControls;
};

async function playAnimation(cubeControls: AnimationControls, sideControls: SideControls, onAnimationComplete?: () => void) {
    try {
        // Reset all animations with isometric view
        cubeControls.set({
            rotateX: -15,
            rotateY: 45,
            opacity: 1,
            scale: 1,
        });

        // Set initial cube face positions and transforms
        await Promise.all([
            // sideControls.front.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            // sideControls.back.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            // sideControls.left.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            // sideControls.right.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            // sideControls.top.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            // sideControls.bottom.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),

            sideControls.front.set({ x: 0, y: 0, z: 64, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            sideControls.back.set({ x: 0, y: 0, z: -64, rotateX: 0, rotateY: 180, rotateZ: 0 }),
            sideControls.left.set({ x: 0, y: 0, z: 64, rotateX: 0, rotateY: -90, rotateZ: 0 }),
            sideControls.right.set({ x: 0, y: 0, z: 64, rotateX: 0, rotateY: 90, rotateZ: 0 }),
            sideControls.top.set({ x: 0, y: 0, z: 64, rotateX: 90, rotateY: 0, rotateZ: 0 }),
            sideControls.bottom.set({ x: 0, y: 0, z: 64, rotateX: -90, rotateY: 0, rotateZ: 0 }),
        ]);

        // 1. Rotate cube twice (720 degrees total) from isometric view
        await cubeControls.start({
            rotateX: -15,
            rotateY: 45 + 720,
            transition: { duration: 2, ease: "easeInOut" }
        });

        // 2. Explode cube sides
        await Promise.all([
            sideControls.front.start({ z: 100, transition: transitionOut }),
            sideControls.back.start({ z: -100, transition: transitionOut }),
            sideControls.left.start({ x: -100, transition: transitionOut }),
            sideControls.right.start({ x: 100, transition: transitionOut }),
            sideControls.top.start({ y: -100, transition: transitionOut }),
            sideControls.bottom.start({ y: 100, transition: transitionOut }),
        ]);

        // 3. Wait for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));

        await Promise.all([
            sideControls.front.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            sideControls.back.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            sideControls.left.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            sideControls.right.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            sideControls.top.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            sideControls.bottom.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
        ]);

        // 4. Reassemble cube (return all sides to their original cube positions)
        await Promise.all([
            sideControls.front.start({ x: 0, y: 0, z: 64, rotateX: 0, rotateY: 0, rotateZ: 0, transition: transitionIn }),
            sideControls.back.start({ x: 0, y: 0, z: -64, rotateX: 0, rotateY: 180, rotateZ: 0, transition: transitionIn }),
            sideControls.left.start({ x: 0, y: 0, z: 64, rotateX: 0, rotateY: -90, rotateZ: 0, transition: transitionIn }),
            sideControls.right.start({ x: 0, y: 0, z: 64, rotateX: 0, rotateY: 90, rotateZ: 0, transition: transitionIn }),
            sideControls.top.start({ x: 0, y: 0, z: 64, rotateX: 90, rotateY: 0, rotateZ: 0, transition: transitionIn }),
            sideControls.bottom.start({ x: 0, y: 0, z: 64, rotateX: -90, rotateY: 0, rotateZ: 0, transition: transitionIn }),
        ]);

        // 5. Wait 0.5 seconds, then fade opacity from 1 to 0.5
        await new Promise(resolve => setTimeout(resolve, 500));

        await cubeControls.start({
            rotateX: -15,
            rotateY: 45 + 720,
            opacity: 0.5,
            transition: { duration: 1, ease: "easeInOut" }
        });

        // 6. Return to initial state
        await cubeControls.start({
            rotateX: -15,
            rotateY: 45,
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" }
        });

        onAnimationComplete?.();
    } catch (error) {
        console.error('Animation error:', error);
    }
}
