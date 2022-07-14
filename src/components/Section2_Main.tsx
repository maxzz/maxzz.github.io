import React from 'react';
import { ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';
import { UIArrow } from './UI/UIArrow';
import { useAtom } from 'jotai';
import { sectionOpenAtoms } from '@/store/store';
import { UIAccordion } from './UI/UIAccordion';

function ProjectTile({ caption, description, urlGithub, urlDemo, previewUrl, localPath, }: ProjectType) {
    return (
        <section className="flex flex-col">
            <div className="pb-1 text-slate-300 uppercase">
                {caption}
            </div>

            <div className="flex-1 p-4 grid grid-rows-[1fr_auto] grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-slate-400 bg-slate-800 rounded">
                <div className="text-sm">
                    {description}
                </div>

                <div className="text-sm flex space-x-2">
                    <div className="h-5" title="Open source code on GitHub"><a className="hoverurl" href={urlGithub} target="_blank">Github</a></div>
                    <div className="h-5" title="Open demo project"><a className="hoverurl" href={urlDemo} target="_blank">Demo</a></div>
                    {localPath &&
                        <div className="h-5" title="Copy path on local hard drive">
                            <button className="hoverurl"
                                onClick={() => {
                                    navigator.clipboard.writeText(localPath); //TODO: show copy notice
                                }}
                            >Local</button>
                        </div>
                    }
                </div>

                <div className="col-start-2 col-end-3 row-span-full place-self-center w-24 h-auto">
                    <img className="grayscale hover:grayscale-0" src={previewUrl} alt="project preview" />
                </div>
            </div >
        </section>
    );
}

function SectionName({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="text-2xl p-4 border-slate-400 border rounded" onClick={() => setSectionOpen((v) => !v)}>
            <div className="flex items-center">
                <div className="leading-5">{section.name}</div>
                <UIArrow className="w-5 h-5 pt-1" open={sectionOpen} />
            </div>
        </div>
    );
}

function Section({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="w-full max-w-7xl grid grid-cols-[auto_minmax(0,1fr)] gap-4">

            <SectionName section={section} />

            <UIAccordion open={sectionOpen} >
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 overflow-y-auto">
                    {section.projects.map((project, idx) => (
                        <ProjectTile {...project} key={idx} />
                    ))}
                </div>
            </UIAccordion>
        </div>
    );
}

export function Section2_Main() {
    return (
        <main className="flex-1 py-4 mx-4 flex flex-col items-center space-y-12 overflow-auto">
            {sections.map((section, idx) => <Section section={section} key={idx} />)}
        </main>
    );
}
