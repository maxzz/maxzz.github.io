import { useEffect, useRef } from "react";
import { motion, useAnimate } from "motion/react";

const textStroke = { WebkitTextStrokeColor: 'var(--color-primary-500)', WebkitTextStrokeWidth: .5 };
const spring = { type: "spring" as const, visualDuration: 0.45, bounce: 0 };

export function SpringTitle({ onComplete }: { onComplete?: () => void; }) {
    const [scope, animate] = useAnimate();
    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        const el = scope.current;
        if (!el) return;

        let cancelled = false;
        const playback = animate([
            [el, { scaleY: 1 }, { duration: 0.2 }],
            [el, { scaleY: 4 }, spring],
            [el, { scaleY: 1 }, spring],
            [el, { scaleX: 1 }, spring],
        ]);

        playback.then(() => {
            if (!cancelled) onCompleteRef.current?.();
        });

        return () => {
            cancelled = true;
            playback.stop();
        };
    }, [animate]);

    return (
        <div className="overflow-hidden">
            <motion.div
                ref={scope}
                className="text-xl text-primary-700 sm:text-4xl origin-left"
                initial={{ scaleY: 0.1, scaleX: 0.5 }}
                style={textStroke}
            >
                Directory of ...
            </motion.div>
        </div>
    );
}

/*
const styles = useSpring({
    from: {
        scaley: '10%',
        scalex: '10%',
        transformOrigin: 'center',
    },
    to: [
        { scaley: '100%', config: { duration: 100 }, },
        { scaley: '400%', scalex: '20%', config: { duration: 100 }, },
        { scaley: '20%', scalex: '100%', config: { duration: 100 } },
        { scaley: '100%', scalex: '160%', transformOrigin: 'left center', },
        { scalex: '100%', config: config.wobbly },
    ],
});
*/
