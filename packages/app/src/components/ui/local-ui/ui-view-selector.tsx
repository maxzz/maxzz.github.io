import { type CSSProperties, type HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { classNames } from "@/utils";
import { IconGrid, IconList } from "@/components/ui/icons";
import { ShowType, uiOptionsAtoms } from "@/store/store";

export function UIViewSelector() {
    return (
        <div className="p-0.5 bg-slate-800/20 rounded-3xl select-none flex items-center space-x-1">
            <SwitchButton thisType={ShowType.list}><><IconList className="p-1 w-6 h-6" /><span>List</span></></SwitchButton>
            <SwitchButton thisType={ShowType.preview}><><IconGrid className="p-1 w-6 h-6" /><span>Grid</span></></SwitchButton>
        </div>
    );
}

function SwitchButton({ thisType, children, ...rest }: { thisType: ShowType; } & HTMLAttributes<HTMLButtonElement>) {
    const [showType, setShowType] = useAtom(uiOptionsAtoms.showTypeAtom);
    const isActive = showType === thisType;
    const isLeft = thisType === ShowType.list;
    return (
        <button
            className={classNames(baseClasses, isActive ? activeClasses : inactiveClasses, isLeft ? leftClasses : rightClasses,)}
            style={{ boxShadow: '0 0 0 1px #ffffff07, 0 2px 4px #ffffff05, 0 12px 24px #ffffff05', '--me': isLeft ? '135deg' : '230deg' } as CSSProperties}
            onClick={() => setShowType(thisType)}
            title={thisType === ShowType.list ? "Show List" : "Show Grid"}
            {...rest}
        >
            <div className="px-4 py-1 text-[.65rem] bg-primary-800/30 rounded-[inherit] flex items-center">
                {children}
            </div>
        </button>
    );
}

const baseClasses = "relative transition-all hover:text-primary-300 hover:bg-primary-800";

const activeClasses = "\
text-primary-400 bg-primary-800/70 \
\
after:absolute after:inset-0 \
after:rounded-[inherit] \
after:[background:linear-gradient(var(--me),#fff1_-.1%,transparent_75%)] \
";
const inactiveClasses = "text-primary-600";

const leftClasses = "rounded-tl-[36px] rounded-bl-[36px] rounded-tr-md rounded-br-md";
const rightClasses = "rounded-tr-[36px] rounded-br-[36px] rounded-tl-md rounded-bl-md";
