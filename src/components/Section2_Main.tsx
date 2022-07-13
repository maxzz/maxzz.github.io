import React from 'react';
import { ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';

function ProjectTile({ caption, description, urlGithub, urlDemo, previewUrl, }: ProjectType) {
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
                    <div className="h-5"><a className="hoverurl" href={urlGithub} target="_blank">Github</a></div>
                    <div className="h-5"><a className="hoverurl" href={urlDemo} target="_blank">Demo</a></div>
                </div>
                <div className="col-start-2 col-end-3 row-span-full place-self-center w-24 h-auto">
                    <img src={previewUrl} alt="" />
                </div>
            </div >
        </section>
    );
}

function Section({ section }: { section: SectionType; }) {
    return (
        <div className="w-full max-w-7xl mx-4 grid grid-cols-[auto_minmax(0,1fr)] gap-4">
            <div className="text-2xl p-4 border-slate-400 border rounded">
                {section.name} v
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 overflow-y-auto">
                {section.projects.map((project, idx) => (
                    <ProjectTile {...project} key={idx} />
                ))}
            </div>
        </div>
    );
}

export function Section2_Main() {
    return (
        <main className="flex-1 py-4 flex flex-col items-center space-y-12 overflow-auto">
            {sections.map((section, idx) => <Section section={section} key={idx} />)}
        </main>
    );
}
