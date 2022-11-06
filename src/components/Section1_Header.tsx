import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { ShowType, uiOptionsAtoms } from "@/store/store";
import { IconExperiments, IconGrid, IconList } from "./UI/UIIcons";
import { classNames } from "@/utils/classnames";

function SwitchButton({ thisType, children, ...rest }: { thisType: ShowType; } & HTMLAttributes<HTMLButtonElement>) {
    const [showType, setShowType] = useAtom(uiOptionsAtoms.showTypeAtom);
    return (
        <button
            className={classNames(
                "w-6 h-6 p-1 hover:bg-primary-800 border-primary-400 rounded active:scale-[.97]",
                showType === thisType && "border bg-primary-800"
            )}
            onClick={() => setShowType(thisType)}
            title={thisType === ShowType.list ? "Show List" : "Show Grid"}
            {...rest}
        >
            {children}
        </button>
    );
}

function ViewSelector() {
    return (
        <div className="flex items-center space-x-1 text-primary-400">
            <SwitchButton thisType={ShowType.list}><IconList /></SwitchButton>
            <SwitchButton thisType={ShowType.preview}><IconGrid /></SwitchButton>
        </div>
    );
}

export function Section1_Header() {
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-sm shadow-slate-700">
            <div className="grid grid-cols-2 items-end space-x-2 text-slate-500 tracking-tighter scale-y-125">

                <div className="text-4xl ">
                    Directory of ...
                </div>

                <div className="translate-y-px">
                    <a className="space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                        <span className="text-sm"> // todo: name to come up with</span>
                        <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-125 stroke-slate-400 inline-block" />
                    </a>
                </div>

            </div>
            <ViewSelector />
        </header>
    );
}
