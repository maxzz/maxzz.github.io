import { AnimatePresence, motion } from "motion/react";

export function MotionTitle() {
    return (
        <div className="overflow-hidden">
            <AnimatePresence>
                <motion.div
                    className="text-xl text-primary-700 sm:text-4xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ ...textStroke }}
                >
                    Directory of ...
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

const textStroke = { WebkitTextStrokeColor: 'var(--tm-primary-500)', WebkitTextStrokeWidth: .5 };
