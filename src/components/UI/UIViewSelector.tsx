import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { ShowType, uiOptionsAtoms } from "@/store/store";
import { classNames } from "@/utils/classnames";
import { IconGrid, IconList } from "./UIIcons";

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
    const isLeft = thisType === ShowType.list;
    const angle = isLeft ? '135deg' : '230deg';
    return (
        <button
            className={classNames(
                "relative transition-all",
                " hover:text-primary-300 hover:bg-primary-800 active:scale-[.97]",
                isActive ? "text-primary-400 bg-primary-800/70" : "text-primary-600",
                thisType === ShowType.list && "rounded-tl-[36px] rounded-bl-[36px] rounded-tr-[6px] rounded-br-[6px]",
                thisType === ShowType.preview && "rounded-tr-[36px] rounded-br-[36px] rounded-tl-[6px] rounded-bl-[6px]",
                isActive && `after:absolute after:inset-0 after:rounded-[inherit] after:[background:linear-gradient(var(--me),#fff2_-.1%,transparent_75%)]`,
            )}
            style={{ boxShadow: '0 0 0 1px #ffffff07, 0 2px 4px #ffffff05, 0 12px 24px #ffffff05', '--me': angle } as React.CSSProperties}
            onClick={() => setShowType(thisType)}
            title={thisType === ShowType.list ? "Show List" : "Show Grid"}
            {...rest}
        >
            <div className="px-4 py-1 flex items-center text-[.65rem] bg-primary-800/30 rounded-[inherit]">
                {children}
            </div>
        </button>
    );
}

export function UIViewSelector() {
    return (
        <div className="p-0.5 flex items-center space-x-1 bg-slate-800/50 rounded-3xl">
            <SwitchButton thisType={ShowType.list}><><IconList className="p-1 w-6 h-6" /><span>List</span></></SwitchButton>
            <SwitchButton thisType={ShowType.preview}><><IconGrid className="p-1 w-6 h-6" /><span>Grid</span></></SwitchButton>
        </div>
    );
}
