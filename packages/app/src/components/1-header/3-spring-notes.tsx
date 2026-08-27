import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import { IconExperiments } from "../ui/icons";

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

export function SpringNotes() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        let cancelled = false;

        async function play() {
            if (!scope.current) return;
            await animate(scope.current, { x: 0, opacity: 1, scaleY: 0.2 }, { delay: 1, duration: 0.2 });
            if (cancelled) return;
            await animate(scope.current, { scaleY: 1 }, { delay: 0.2, duration: 1.2, ease: easeOutBounce });
        }

        play();
        return () => { cancelled = true; };
    }, [animate]);

    return (
        <motion.div ref={scope} className="origin-bottom-left" initial={{ x: 400, opacity: 0, scaleY: 0 }}>
            <a className="inline-block translate-y-px space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                <span className="text-[.65rem] leading-[.65rem] sm:text-sm">
                         // todo: name to come up with
                </span>

                <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-75 sm:scale-125 stroke-slate-400 inline-block" />
            </a>
        </motion.div>
    );
}
