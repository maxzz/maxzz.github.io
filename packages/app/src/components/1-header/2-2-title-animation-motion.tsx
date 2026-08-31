import { useEffect } from "react";
import { type Transition, motion, useAnimate, useReducedMotion } from "motion/react";
import { IconExperiments } from "../ui/icons";

const textStroke = { WebkitTextStrokeColor: 'var(--color-primary-500)', WebkitTextStrokeWidth: .5 };

const stretch: Transition = { type: "spring", visualDuration: 0.28, bounce: 0.45 };
const squash: Transition = { type: "spring", visualDuration: 0.2, bounce: 0.32 };
const settle: Transition = { type: "spring", visualDuration: 0.42, bounce: 0.5 };
const slide: Transition = { type: "spring", visualDuration: 0.4, bounce: 0.28 };
const land: Transition = { type: "spring", visualDuration: 0.55, bounce: 0.55 };

export function IntroTitleAnimationMotion() {

    const [scope, animate] = useAnimate();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) {
            const playback = animate([
                [".js-title", { scaleX: 1, scaleY: 1, rotate: 0 }, { duration: 0 }],
                [".js-notes", { x: 0, opacity: 1, scaleY: 1 }, { duration: 0 }],
                [".js-icon", { rotate: 0 }, { duration: 0 }],
            ]);
            return () => playback.stop();
        }

        const playback = animate([
            [".js-title", { scaleX: 0.42, scaleY: 1, rotate: 0 }, { duration: 0.12, ease: "easeOut" }],
            [".js-title", { scaleX: 0.28, scaleY: 2.25, rotate: -2 }, stretch],
            [".js-title", { scaleX: 1.2, scaleY: 0.68, rotate: 1.5 }, squash],
            [".js-title", { scaleX: 1, scaleY: 1, rotate: 0 }, settle],
            [".js-notes", { x: 0, opacity: 1, scaleY: 0.22 }, { ...slide, at: 0.32, opacity: { duration: 0.18, ease: "linear" } }],
            [".js-notes", { scaleY: 1 }, land],
            [".js-icon", { rotate: [0, -16, 10, 0] }, { ...settle, at: "<" }],
        ]);

        playback.then(
            () => {
                const root = scope.current;
                if (!root) return;
                for (const node of root.querySelectorAll(".js-title, .js-notes, .js-icon")) {
                    (node as HTMLElement).style.willChange = "auto";
                }
            }
        );

        return () => playback.stop();
    }, [animate, shouldReduceMotion]);

    return (
        <div ref={scope} className={leftClasses}>
            <motion.div
                className="text-xl sm:text-4xl text-primary-700 js-title origin-left"
                initial={shouldReduceMotion ? { scaleX: 1, scaleY: 1, rotate: 0 } : { scaleX: 0.5, scaleY: 0.1, rotate: 0 }}
                whileHover={shouldReduceMotion ? undefined : { scaleX: 1.04, scaleY: 1.04 }}
                transition={settle}
                style={{ ...textStroke, willChange: "transform" }}
            >
                Directory of ...
            </motion.div>

            <motion.div
                className="js-notes origin-bottom-left"
                initial={shouldReduceMotion ? { x: 0, opacity: 1, scaleY: 1 } : { x: 400, opacity: 0, scaleY: 0 }}
                style={{ willChange: "transform" }}
            >
                <a className="inline-block translate-y-px space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                    <span className="sm:text-sm text-[.65rem] leading-[.65rem]">
                             // todo: name to come up with
                    </span>

                    <IconExperiments className="inline-block pb-0.5 w-4 h-4 stroke-slate-400 sm:scale-125 js-icon origin-bottom scale-75" />
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
