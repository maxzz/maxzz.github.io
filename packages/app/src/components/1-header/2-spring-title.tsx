import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";

const textStroke = { WebkitTextStrokeColor: 'var(--color-primary-500)', WebkitTextStrokeWidth: .5 };
const spring = { type: "spring" as const, stiffness: 170, damping: 26 };

export function SpringTitle() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        let cancelled = false;

        async function play() {
            if (!scope.current) return;
            await animate(scope.current, { scaleY: 1 }, { duration: 0.2 });
            if (cancelled) return;
            await animate(scope.current, { scaleY: 4 }, spring);
            if (cancelled) return;
            await animate(scope.current, { scaleY: 1 }, spring);
            if (cancelled) return;
            await animate(scope.current, { scaleX: 1 }, spring);
        }

        play();
        return () => { cancelled = true; };
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
