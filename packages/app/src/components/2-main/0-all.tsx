import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from "@/store/store";
import { type SectionType, sections } from "@maxzz/db-apps";
import { UIAccordion, UIArrow } from "../ui";
import { ProjectsAsGrid } from "./2-project-item-grid";
import { ProjectsAsList } from "./2-project-item-list";
import { AnimatedCube } from "./6-animated-cube";

export function Section2_Main() {
    return (<>
        <CubeAnimationDemo />
        {sections.map(
            (section, idx) => (
                <ProjectsGroup section={section} key={idx} />
            )
        )}
    </>);
}

function CubeAnimationDemo() {
    const [trigger, setTrigger] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleStartAnimation = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTrigger(true);
        }
    };

    const handleAnimationComplete = () => {
        setIsAnimating(false);
        setTrigger(false);
    };

    return (
        <div className="w-full px-4 max-w-[96rem] mb-8">
            <div className="bg-primary-800/30 border border-primary-400/50 rounded-lg p-6">
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-primary-200">
                        Animated Cube Demo
                    </h3>
                    
                    <AnimatedCube 
                        trigger={trigger} 
                        onAnimationComplete={handleAnimationComplete} 
                    />
                    
                    <button
                        onClick={handleStartAnimation}
                        disabled={isAnimating}
                        className={`
                            px-6 py-3 rounded-lg font-medium transition-all duration-200
                            ${isAnimating 
                                ? 'bg-primary-600/50 text-primary-400 cursor-not-allowed' 
                                : 'bg-primary-600 hover:bg-primary-500 text-white cursor-pointer'
                            }
                        `}
                    >
                        {isAnimating ? 'Playing Animation...' : 'Play Cube Animation'}
                    </button>
                </div>
            </div>
        </div>
    );
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
