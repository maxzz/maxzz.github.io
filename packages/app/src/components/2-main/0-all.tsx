import { useAtom, useAtomValue } from "jotai";
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from "@/store/store";
import { type SectionType, sections } from "@maxzz/db-apps";
import { UIAccordion, UIArrow } from "../ui";
import { ProjectItem_Grid } from "./2-project-item-grid";
import { ProjectItem_List } from "./2-project-item-list";

export function Section2_Main() {
    return (<>
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
            <SectionName section={section} />

            <UIAccordion open={sectionOpen}>
                {showType === ShowType.list
                    ? <ProjectsAsList section={section} />
                    : <ProjectsAsGroup section={section} />
                }
            </UIAccordion>
        </div>
    );
}

function ProjectsAsGroup({ section }: { section: SectionType; }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[minmax(250px,1fr)] gap-2">
            {section.projects.map(
                (project, idx) => (
                    <ProjectItem_Grid project={project} key={idx} />
                )
            )}
        </div>
    );
}

function ProjectsAsList({ section }: { section: SectionType; }) {
    return (
        <div className="columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
            {section.projects.map(
                (project, idx) => (
                    <ProjectItem_List project={project} key={idx} />
                )
            )}
        </div>
    );
}

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