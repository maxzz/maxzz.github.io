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

export function Section1_Head() {
    const [showType, setShowType] = useAtom(uiOptionsAtoms.showTypeAtom);
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-sm shadow-slate-700">
            <a href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                <span>// todo: name to come up with </span>
                <IconExperiments className="pb-px w-4 h-4 stroke-slate-400 inline-block" />
            </a>

            <div className="flex items-center space-x-1 text-primary-400">
                <SwitchButton thisType={ShowType.list}><IconList /></SwitchButton>
                <SwitchButton thisType={ShowType.preview}><IconGrid /></SwitchButton>
            </div>
        </header>
    );
}
