import { useEffect, useRef, useState } from "react";
import { a, easings, useSpring } from "@react-spring/web";
import { IconExperiments } from "../ui/icons";

export function IntroTitleAnimationSpring() {
    return (
        <div className={leftClasses}>
            <SpringTitle />
            <SpringNotes />
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

//---------------------------------------------------------------------------

function SpringTitle() {
    const [textShadow, setTextShadow] = useState("none");
    const timersRef = useRef<number[]>([]);

    useEffect(() => () => {
        for (const id of timersRef.current) window.clearTimeout(id);
    }, []);

    const styles = useSpring({
        from: {
            scaleY: 0.1,
            scaleX: 0.5,
            transformOrigin: 'left center',
        },
        to: [
            { scaleY: 1, config: { duration: 200 }, },
            { scaleY: 4, },
            { scaleY: 1, },
            {
                scaleX: 1,
                onRest: () => {
                    for (const id of timersRef.current) window.clearTimeout(id);
                    timersRef.current = [
                        window.setTimeout(() => setTextShadow("1px 1px 1px #991010"), 1000),
                        window.setTimeout(() => setTextShadow("none"), 1200),
                    ];
                },
            },
        ],
        //config: { duration: 2000, },
    });
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
        //config: { duration: 2000, },
    });
    */
    return (
        <div className="overflow-hidden">
            <a.div className="text-xl text-primary-700 sm:text-4xl" style={{ ...styles, ...textStroke, textShadow }}>
                Directory of ...
            </a.div>
        </div>
    );
}

const textStroke = { WebkitTextStrokeColor: 'var(--color-primary-500)', WebkitTextStrokeWidth: .5 };

//---------------------------------------------------------------------------

function SpringNotes() {

    const styles = useSpring({
        from: {
            x: 400,
            opacity: 0,
            scaleY: 0,
            transformOrigin: 'left bottom'
        },
        to: [
            {
                x: 0,
                opacity: 1,
                scaleY: .2,
                delay: 1000,
                config: { duration: 200 },
            },
            {
                scaleY: 1,
                delay: 200,
                config: { duration: 1200, easing: easings.easeOutBounce },
            },
        ],
    });

    return (
        <a.div style={styles}>
            <a className="flex-1 inline-block translate-y-px space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                <span className="text-[.65rem] leading-[.65rem] sm:text-sm">
                    // todo: name to come up with
                </span>

                <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-75 sm:scale-125 stroke-slate-400 inline-block" />
            </a>
        </a.div>
    );
}
