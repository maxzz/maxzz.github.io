import { useAtom } from "jotai";
import { UIViewSelector } from "@/components/ui/local-ui/UIViewSelector";
import { Stars } from "@/components/ui/icons/icon-star";
import { SpringIntro } from "./2-spring-intro";
import { rerenderAtom } from "./8-atoms";

export function Section1_Header() {
    const [foo, setFoo] = useAtom(rerenderAtom);
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-xs shadow-slate-700">
            {/* <ButtonRerender foo={foo} setFoo={setFoo} /> */}
            <SpringIntro />
            {/* <MotionTitle />
            <MotionNotes /> */}

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

const buttonClasses = "\
absolute right-0 -top-2 px-2 py-0.5 text-xs \
bg-slate-800 rounded-sm flex items-center space-x-2";
