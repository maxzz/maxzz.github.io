import { useAtom } from "jotai";
import { IntroTitleAnimationSpring } from "./2-1-title-animation-spring";
import { IntroTitleAnimationMotion } from "./2-2-title-animation-motion";
import { UIViewSelector } from "@/components/ui/local-ui/ui-view-selector";
import { Stars } from "@/components/ui/icons/icon-star";
import { rerenderAtom } from "./8-atoms";

export function Section1_Header() {
    const [foo, setFoo] = useAtom(rerenderAtom);
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-xs shadow-slate-700">

            {/* <ButtonRerender foo={foo} setFoo={setFoo} /> */}

            <IntroTitleAnimationSpring />
            {/* <IntroTitleAnimationMotion /> */}

            {/* {foo ? <IntroTitleAnimationSpring /> : <DummyText />} */}
            {/* {foo ? <IntroTitleAnimationMotion /> : <DummyText />} */}

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

// Button Rerender

function ButtonRerender({ foo, setFoo }: { foo: boolean; setFoo: (v: boolean) => void; }) {
    return (
        <button className={buttonClasses} onClick={() => setFoo(!foo)}>
            Rerender ({foo ? "y" : "n"})
        </button>
    );
}

function DummyText() {
    return (
        <div className="h-10">Once again...</div>
    );
}

const buttonClasses = "\
absolute right-48 top-7 px-2 py-0.5 text-[.65rem] \
bg-slate-800 rounded border border-slate-700 flex items-center space-x-2";
