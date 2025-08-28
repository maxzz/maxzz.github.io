import { useAtom } from "jotai";
import { UIArrow } from "../ui";
import { type SectionType } from "@maxzz/db-apps/store-types";
import { sectionOpenAtoms } from "@/store/store";

export function SectionName2({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="mb-2 text-2xl cursor-pointer select-none" onClick={() => setSectionOpen((v) => !v)}>
            <div className="px-4 py-3 max-w-min bg-primary-800/70 border-primary-400/50 shadow shadow-primary-800 hover:bg-primary-700/50 border rounded flex items-center space-y-2">

                <div className="w-max leading-5 left-t">
                    {section.name}
                </div>

                <UIArrow className="w-5 h-5" open={sectionOpen} />
            </div>
        </div>
    );
}

function SectionName1({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="mb-2 px-4 py-3 text-2xl bg-primary-800/70 border-primary-400/50 shadow shadow-primary-800 hover:bg-primary-700/50 border rounded cursor-pointer select-none" onClick={() => setSectionOpen((v) => !v)}>
            <div className="flex items-center space-y-2">

                <div className="leading-5 left-t">
                    {section.name}
                </div>

                <UIArrow className="w-5 h-5" open={sectionOpen} />
            </div>
        </div>
    );
}
