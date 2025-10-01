import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { classNames } from "@/utils";

interface AnimatedCubeProps {
    trigger: boolean;
    onAnimationComplete?: () => void;
}

export function AnimatedCube({ trigger, onAnimationComplete }: AnimatedCubeProps) {
    const cubeControls = useAnimation();
    const sideControls = {
        front: useAnimation(),
        back: useAnimation(),
        left: useAnimation(),
        right: useAnimation(),
        top: useAnimation(),
        bottom: useAnimation(),
    };

    useEffect(() => {
        if (trigger) {
            playAnimation();
        }
    }, [trigger]);

    const playAnimation = async () => {
        try {
            // Reset all animations with isometric view
            await cubeControls.set({
                rotateX: -15,
                rotateY: 45,
                opacity: 1,
                scale: 1,
            });

            // Reset all sides to initial position (keeping their original CSS transforms)
            // await Promise.all([
            //     sideControls.front.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            //     sideControls.back.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            //     sideControls.left.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            //     sideControls.right.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            //     sideControls.top.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            //     sideControls.bottom.set({ x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }),
            // ]);

            // 1. Rotate cube twice (720 degrees total) from isometric view
            await cubeControls.start({
                rotateX: -15,
                rotateY: 45 + 720,
                transition: { duration: 2, ease: "easeInOut" }
            });

            // 2. Explode cube sides
            await Promise.all([
                sideControls.front.start({ z: 100, transition: { duration: 0.5, ease: "easeOut" } }),
                sideControls.back.start({ z: -100, transition: { duration: 0.5, ease: "easeOut" } }),
                sideControls.left.start({ x: -100, transition: { duration: 0.5, ease: "easeOut" } }),
                sideControls.right.start({ x: 100, transition: { duration: 0.5, ease: "easeOut" } }),
                sideControls.top.start({ y: -100, transition: { duration: 0.5, ease: "easeOut" } }),
                sideControls.bottom.start({ y: 100, transition: { duration: 0.5, ease: "easeOut" } }),
            ]);

            // 3. Wait for 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 4. Reassemble cube (return all sides to their original cube positions)
            // await Promise.all([
            //     sideControls.front.start({ x: 0, y: 0, z: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
            //     sideControls.back.start({ x: 0, y: 0, z: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
            //     sideControls.left.start({ x: 0, y: 0, z: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
            //     sideControls.right.start({ x: 0, y: 0, z: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
            //     sideControls.top.start({ x: 0, y: 0, z: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
            //     sideControls.bottom.start({ x: 0, y: 0, z: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
            // ]);

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
    };

    return (
        <div className="relative size-32 cube-perspective">
            <motion.div
                animate={cubeControls}
                initial={{ rotateX: -15, rotateY: 45 }}
                className="relative w-full h-full cube-3d"
            >
                <motion.div animate={sideControls.front}  /**/ className={classNames(sideClasses, "bg-red-500 border-2 border-red-600")}       /**/ style={{ transform: 'translateZ(64px)', }}>Front</motion.div> {/* Front face */}
                <motion.div animate={sideControls.back}   /**/ className={classNames(sideClasses, "bg-blue-500 border-2 border-blue-600")}     /**/ style={{ transform: 'translateZ(-64px) rotateY(180deg)', }}>Back</motion.div> {/* Back face */}
                <motion.div animate={sideControls.left}   /**/ className={classNames(sideClasses, "bg-green-500 border-2 border-green-600")}   /**/ style={{ transform: 'rotateY(-90deg) translateZ(64px)', }}>Left</motion.div> {/* Left face */}
                <motion.div animate={sideControls.right}  /**/ className={classNames(sideClasses, "bg-yellow-500 border-2 border-yellow-600")} /**/ style={{ transform: 'rotateY(90deg) translateZ(64px)', }}>Right</motion.div> {/* Right face */}
                <motion.div animate={sideControls.top}    /**/ className={classNames(sideClasses, "bg-purple-500 border-2 border-purple-600")} /**/ style={{ transform: 'rotateX(90deg) translateZ(64px)', }}>Top</motion.div> {/* Top face */}
                <motion.div animate={sideControls.bottom} /**/ className={classNames(sideClasses, "bg-orange-500 border-2 border-orange-600")} /**/ style={{ transform: 'rotateX(-90deg) translateZ(64px)', }}>Bottom</motion.div> {/* Bottom face */}
            </motion.div>
        </div>
    );
}

const sideClasses = "absolute size-full text-white font-bold flex items-center justify-center";
