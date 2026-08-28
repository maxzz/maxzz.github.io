import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import { IconExperiments } from "../ui/icons";

const textStroke = { WebkitTextStrokeColor: 'var(--color-primary-500)', WebkitTextStrokeWidth: .5 };
const spring = { type: "spring" as const, visualDuration: 0.45, bounce: 0 };

const easeOutBounce = (x: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    }
    if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    }
    if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    }
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
};

export function SpringIntro() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const playback = animate([
            [".js-title", { scaleY: 1 }, { duration: 0.2 }],
            [".js-title", { scaleY: 4 }, spring],
            [".js-title", { scaleY: 1 }, spring],
            [".js-title", { scaleX: 1 }, spring],
            [".js-notes", { x: 0, opacity: 1, scaleY: 0.2 }, { duration: 0.2 }],
            [".js-notes", { scaleY: 1 }, { delay: 0.2, duration: 1.2, ease: easeOutBounce }],
        ]);

        return () => {
            playback.stop();
        };
    }, [animate]);

    return (
        <div ref={scope} className={leftClasses}>
            <div className="overflow-hidden">
                <motion.div
                    className="js-title text-xl text-primary-700 sm:text-4xl origin-left"
                    initial={{ scaleY: 0.1, scaleX: 0.5 }}
                    style={textStroke}
                >
                    Directory of ...
                </motion.div>
            </div>

            <motion.div className="js-notes origin-bottom-left" initial={{ x: 400, opacity: 0, scaleY: 0 }}>
                <a className="inline-block translate-y-px space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                    <span className="text-[.65rem] leading-[.65rem] sm:text-sm">
                             // todo: name to come up with
                    </span>

                    <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-75 sm:scale-125 stroke-slate-400 inline-block" />
                </a>
            </motion.div>
        </div>
    );
}

const leftClasses = "\
relative \
grid \
grid-rows-[minmax(0,1fr)_1rem] \
sm:grid-rows-none \
sm:grid-cols-2 \
items-end \
sm:gap-2 \
text-slate-500 tracking-tighter \
1scale-y-125"; //TODO: return scale back after done switching to motion
