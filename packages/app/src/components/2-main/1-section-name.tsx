import { useAtom } from "jotai";
import { UIArrow } from "../ui";
import { type SectionType } from "@maxzz/db-apps";
import { sectionOpenAtoms } from "@/store/store";

export function SectionName({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="mb-2 text-xl cursor-pointer select-none" onClick={() => setSectionOpen((v) => !v)}>
            <div className={buttonClasses}>

                <div className="w-max leading-5 left-t">
                    {section.name}
                </div>

                <UIArrow className="w-5 h-5" open={sectionOpen} />
            </div>
        </div>
    );
}

const buttonClasses = "\
px-3 py-2 max-w-min \
bg-primary-800/70 border-primary-400/50 shadow shadow-primary-800 hover:bg-primary-700/50 \
border \
rounded \
flex items-center space-y-2 \
";