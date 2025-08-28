import { useState } from "react";
import { useAtom } from "jotai";
import { UIViewSelector } from "../ui";
import { Stars } from "../ui/icons/icon-star";
import { SpringTitle } from "./2-spring-title";
import { SpringNotes } from "./3-spring-notes";
import { MotionTitle } from "./4-motion-title";
import { MotionNotes } from "./5-motion-notes";
import { rerenderAtom } from "./8-atoms";

export function Section1_Header() {
    const [foo, setFoo] = useAtom(rerenderAtom);
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-sm shadow-slate-700">
            <div className={leftClasses}>
                {/* <ButtonRerender foo={foo} setFoo={setFoo} /> */}

                <SpringTitle />
                <SpringNotes />
                
                {/* <MotionTitle />
                <MotionNotes /> */}
            </div>

            <div className="relative">
                <UIViewSelector />

                {/* <div className="absolute right-4 -top-1 "><Star /></div> */}
                <div className="absolute -right-2 -top-2 w-6 h-6">
                    <Stars className="stroke-none fill-current" />
                </div>
            </div>
        </header>
    );
}

function ButtonRerender({ foo, setFoo }: { foo: boolean; setFoo: (v: boolean) => void; }) {
    return (
        <button
            className={buttonClasses}
            onClick={() => setFoo(!foo)}
        >
            Rerender ({foo ? "y" : "n"})
        </button>
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

const buttonClasses = "\
absolute right-0 -top-2 px-2 py-0.5 text-xs \
bg-slate-800 rounded flex items-center space-x-2";
