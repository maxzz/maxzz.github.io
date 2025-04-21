import { useAtom, useAtomValue } from "jotai";
import { AnimatePresence, motion, useAnimate, useAnimation } from "motion/react";
import { rerenderAtom } from "./8-atoms";
import { useEffect } from "react";

export function MotionTitle() {
    const [scope, animate] = useAnimate();
    const foo = useAtomValue(rerenderAtom);

    useEffect(() => {
        animate(
            scope.current,
            {
                // scaleX: 1,
                // scaleY: foo ? [1, 2.5, 1] : [0],
                scaleY: [0, 1.2, 1, 1],
                // opacity: foo ? 1 : 0,
            },
            {
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 0.7, 1],
            }
        );
    }, [foo]);

    return (
        <div className="overflow-hidden">
            <motion.div
                ref={scope}
                className="text-xl sm:text-4xl text-primary-700"
                // initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // transition={{ duration: 1, ease: "easeOut" }}
                style={{ 
                    transformOrigin: 'left bottom',
                    ...textStroke,
                 }}
            >
                Directory of ...
            </motion.div>
        </div>
    );
}

const textStroke = { WebkitTextStrokeColor: 'var(--tm-primary-500)', WebkitTextStrokeWidth: .5 };
