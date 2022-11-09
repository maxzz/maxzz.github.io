import React from "react";
import { IconExperiments } from "./UI/UIIcons";
import { a, easings, useSpring } from "@react-spring/web";
import { UIViewSelector } from "./UI/UIViewSelector";

export function Section1_Header() {
    const styles = useSpring({ from: { x: -200, opacity: 0 }, x: 0, opacity: 1, config: { duration: 4000, easing: easings.easeOutBounce } });
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-sm shadow-slate-700">
            <div className="grid grid-rows-[minmax(0,1fr)_1rem] sm:grid-rows-none sm:grid-cols-2 items-end sm:space-x-2 text-slate-500 tracking-tighter scale-y-125">

                <div className="text-xl text-primary-700 sm:text-4xl" style={{ WebkitTextStrokeColor: 'var(--tm-primary-500)', WebkitTextStrokeWidth: .5 }}>
                    Directory of ...
                </div>

                <a.div style={styles}>
                    <div className="translate-y-px">
                        <a className="space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                            <span className="text-[.65rem] leading-[.65rem] sm:text-sm"> // todo: name to come up with</span>
                            <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-75 sm:scale-125 stroke-slate-400 inline-block" />
                        </a>
                    </div>
                </a.div>
            </div>

            <UIViewSelector />
        </header>
    );
}
