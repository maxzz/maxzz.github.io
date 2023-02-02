import React from "react";
import { IconExperiments } from "./UI/Icons/UIIcons";
import { a, easings, useSpring } from "@react-spring/web";
import { UIViewSelector } from "./UI/UIViewSelector";

const textStroke = { WebkitTextStrokeColor: 'var(--tm-primary-500)', WebkitTextStrokeWidth: .5 };

function Title() {
    const styles = useSpring({
        from: {
            'scaley': '500%',
        },
        to: [
            { 'scaley': '100%' },
            { 'scaley': '120%' },
            { 'scaley': '100%' },
        ],
    });
    return (
        <a.div className="text-xl text-primary-700 sm:text-4xl" style={{ ...styles, ...textStroke }}>
            Directory of ...
        </a.div>
    );
}

function Notes() {
    const styles = useSpring({ from: { x: -200, opacity: 0 }, x: 0, opacity: 1, delay: 4000, config: { duration: 4000, easing: easings.easeOutBounce } });
    return (
        <a.div style={styles}>
            <div className="translate-y-px">
                <a className="space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                    <span className="text-[.65rem] leading-[.65rem] sm:text-sm"> // todo: name to come up with</span>
                    <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-75 sm:scale-125 stroke-slate-400 inline-block" />
                </a>
            </div>
        </a.div>

    );
}

export function Section1_Header() {

    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-sm shadow-slate-700">
            <div className="grid grid-rows-[minmax(0,1fr)_1rem] sm:grid-rows-none sm:grid-cols-2 items-end sm:space-x-2 text-slate-500 tracking-tighter scale-y-125">
                <Title />
                <Notes />
            </div>

            <UIViewSelector />
        </header>
    );
}
