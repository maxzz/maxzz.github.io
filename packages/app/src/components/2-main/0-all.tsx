import { useAtomValue } from "jotai";
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from "@/store/store";
import { type SectionType, sections } from "@maxzz/db-apps";
import { UIAccordion } from "../ui";
import { SectionName } from "./1-section-name";
import { ProjectItem_Grid, ProjectItem_List } from "./2-project-item";

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
                <>
                    {showType === ShowType.list
                        ? (
                            <div className="columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
                                {section.projects.map(
                                    (project, idx) => (
                                        <ProjectItem_List project={project} key={idx} />
                                    )
                                )}
                            </div>
                        )
                        : (
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[minmax(250px,1fr)] gap-2">
                                {section.projects.map(
                                    (project, idx) => (
                                        <ProjectItem_Grid project={project} key={idx} />
                                    )
                                )}
                            </div>
                        )
                    }
                </>
            </UIAccordion>
        </div>
    );
}
