import { useAtom, useAtomValue } from "jotai";
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from "@/store/store";
import { type SectionType, sections } from "@maxzz/db-apps";
import { UIAccordion } from "@/components/ui/local-ui/ui-accordion";
import { UIArrow } from "@/components/ui/local-ui/ui-accordion-arrow";
import { ProjectsAsGrid } from "./2-1-project-item-grid";
import { ProjectsAsList } from "./2-2-project-item-list";
import { CubeAnimationDemo } from "../8-1-cube-animation";
import { TimelineExample } from "../8-2-demo-timeline/TimelineExample";

export function Section2_Main() {
    return (<>
        {/* <CubeAnimationDemo />
        <TimelineExample /> */}

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
        <div className="px-4 w-full max-w-384 grid grid-rows-[auto_minmax(0,1fr)]">
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
        <div className="mb-2 text-xl select-none cursor-pointer" onClick={() => setSectionOpen((v) => !v)}>
            <div className={buttonClasses}>

                <div className="left-t w-max leading-5">
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
rounded-sm \
shadow-sm shadow-primary-800 \
flex items-center \
";
