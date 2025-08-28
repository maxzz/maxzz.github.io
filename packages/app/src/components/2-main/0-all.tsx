import { useAtomValue } from "jotai";
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from "@/store/store";
import { type SectionType, sections } from "@maxzz/db-apps";
import { UIAccordion } from "../ui";
import { SectionName2 } from "./1-section-name";
import { ProjectGridItem, ProjectListItem } from "./2-project-item";

export function Section2_Main() {
    return (
        // <main className="flex-1 my-4 flex flex-col items-center space-y-4 overflow-y-overlay smallscroll">
        <main className="flex-1 my-4 space-y-4 overflow-y-overlay smallscroll">
            {sections.map((section, idx) => <Section section={section} key={idx} />)}
        </main>
    );
}

function Section({ section }: { section: SectionType; }) {
    const sectionOpen = useAtomValue(sectionOpenAtoms(section.name));
    const showType = useAtomValue(uiOptionsAtoms.showTypeAtom);
    return (
        <div className="w-full px-4 max-w-[96rem] grid grid-rows-[auto_minmax(0,1fr)]">
            <SectionName2 section={section} />

            <UIAccordion open={sectionOpen}>
                <>
                    {showType === ShowType.list
                        ? (
                            <div className="columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
                                {section.projects.map((project, idx) => (
                                    <ProjectListItem project={project} key={idx} />
                                ))}
                            </div>
                        )
                        : (
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[minmax(250px,1fr)] gap-2">
                                {section.projects.map((project, idx) => (
                                    <ProjectGridItem project={project} key={idx} />
                                ))}
                            </div>
                        )
                    }
                </>
            </UIAccordion>
        </div>
    );
}
