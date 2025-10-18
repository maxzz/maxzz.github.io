import { useAtom, useAtomValue } from "jotai";
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from "@/store/store";
import { type SectionType, sections } from "@maxzz/db-apps";
import { UIAccordion, UIArrow } from "../../ui";
import { ProjectsAsGrid } from "./2-project-item-grid";
import { ProjectsAsList } from "./2-project-item-list";
import { CubeAnimationDemo } from "../0-cube-animation";

export function Section2_Main() {
    return (<>
        {/* <CubeAnimationDemo /> */}

        {sections.map(
            (section, idx) => (
                <ProjectsGroup section={section} key={idx} />
            )
        )}
    </>);
}

function ProjectsGroup({ section }: { section: SectionType; }) {
    const sectionOpen = useAtomValue(sectionOpenAtoms(section.name));
    const showType = useAtomValue(uiOptionsAtoms.showTypeAtom);
    return (
        <div className="w-full px-4 max-w-[96rem] grid grid-rows-[auto_minmax(0,1fr)]">
            <ProjectsGroupName section={section} />

            <UIAccordion open={sectionOpen}>
                {showType === ShowType.list
                    ? <ProjectsAsList section={section} />
                    : <ProjectsAsGrid section={section} />
                }
            </UIAccordion>
        </div>
    );
}

function ProjectsGroupName({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="mb-2 text-xl cursor-pointer select-none" onClick={() => setSectionOpen((v) => !v)}>
            <div className={buttonClasses}>

                <div className="w-max leading-5 left-t">
                    {section.name}
                </div>

                <UIArrow className="mt-2 size-5" open={sectionOpen} />
            </div>
        </div>
    );
}

const buttonClasses = "\
px-3 py-2 max-w-min \
bg-primary-800/70 hover:bg-primary-700/50 \
border border-primary-400/50 \
rounded \
shadow shadow-primary-800 \
flex items-center \
";
