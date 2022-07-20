import { useAtom } from "jotai";
import { ShowType, uiOptionsAtoms } from "@/store/store";
import { IconExperiments, IconGrid, IconList } from "./UI/UIIcons";
import { classNames } from "@/utils/classnames";

// function SwitchButton() {
//     return (
//         <div className="">
//             <IconList className={classNames("w-6 h-6 p-1 rounded border-primary-200", showType === ShowType.list && "border bg-primary-800")} />
//         </div>
//     );
// }

export function Section1_Head() {
    const [showType, setShowType] = useAtom(uiOptionsAtoms.showTypeAtom);
    return (
        <header className="p-4 flex items-center justify-between text-xl bg-black shadow-sm shadow-slate-700">
            <div className="">
                <span>// todo: name to come up with </span>
                <IconExperiments className="pb-px w-4 h-4 stroke-slate-400 inline-block" />
            </div>

            <div className="flex items-center space-x-1 text-primary-400">
                <button className={classNames("w-6 h-6 p-1 hover:bg-primary-800 border-primary-400 rounded active:scale-[.97]", showType === ShowType.list && "border bg-primary-800")} onClick={() => setShowType(ShowType.list)}>
                    <IconList />
                </button>
                <button className={classNames("w-6 h-6 p-1 hover:bg-primary-800 border-primary-400 rounded active:scale-[.97]", showType === ShowType.preview && "border bg-primary-800")} onClick={() => setShowType(ShowType.preview)}>
                    <IconGrid />
                </button>
            </div>
        </header>
    );
}
