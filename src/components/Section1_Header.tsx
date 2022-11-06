import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { ShowType, uiOptionsAtoms } from "@/store/store";
import { IconExperiments, IconGrid, IconList } from "./UI/UIIcons";
import { classNames } from "@/utils/classnames";
import { a, easings, useSpring } from "@react-spring/web";

function SwitchButtonOld({ thisType, children, ...rest }: { thisType: ShowType; } & HTMLAttributes<HTMLButtonElement>) {
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

function ViewSelectorOld() {
    return (
        <div className="flex items-center space-x-1 text-primary-400">
            <SwitchButtonOld thisType={ShowType.list}><IconList /></SwitchButtonOld>
            <SwitchButtonOld thisType={ShowType.preview}><IconGrid /></SwitchButtonOld>
        </div>
    );
}

function SwitchButton({ thisType, children, ...rest }: { thisType: ShowType; } & HTMLAttributes<HTMLButtonElement>) {
    const [showType, setShowType] = useAtom(uiOptionsAtoms.showTypeAtom);
    const isActive = showType === thisType;
    return (
        <button
            className={classNames(
                "relative",
                "hover:bg-primary-800 border-primary-400 active:scale-[.97]",
                isActive && "border bg-primary-800",
                thisType === ShowType.list && "rounded-tl-[36px] rounded-bl-[36px] rounded-tr-[6px] rounded-br-[6px]",
                thisType === ShowType.preview && "rounded-tr-[36px] rounded-br-[36px] rounded-tl-[6px] rounded-bl-[6px]",
                "after:absolute after:inset-0 after:rounded-[inherit] after:[background-color:red]",
            )}
            style={{boxShadow: '0 0 0 1px #ffffff07, 0 2px 4px #ffffff05, 0 12px 24px #ffffff05'}}
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
        <div className="p-1 flex items-center space-x-1 text-primary-400 bg-slate-800 rounded-3xl">
            <SwitchButton thisType={ShowType.list}><div className="px-2 flex items-center text-xs"><IconList className="p-1 w-6 h-6" />List</div></SwitchButton>
            <SwitchButton thisType={ShowType.preview}><div className="px-2 flex items-center text-xs"><IconGrid className="p-1 w-6 h-6" />Grid</div></SwitchButton>
        </div>
    );
}

export function Section1_Header() {
    const styles = useSpring({ from: { x: -200, opacity: 0 }, x: 0, opacity: 1, config: { duration: 4000, easing: easings.easeOutBounce } });
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-sm shadow-slate-700">
            <div className="grid grid-cols-2 items-end space-x-2 text-slate-500 tracking-tighter scale-y-125">

                <div className="text-4xl ">
                    Directory of ...
                </div>

                <a.div style={styles} className="">
                    <div className="translate-y-px">
                        <a className="space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                            <span className="text-sm"> // todo: name to come up with</span>
                            <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-125 stroke-slate-400 inline-block" />
                        </a>
                    </div>
                </a.div>

            </div>
            <ViewSelector />
        </header>
    );
}
