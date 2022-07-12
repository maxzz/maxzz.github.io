import React from 'react';
import { ProjectType, SectionType } from '@/store/store-types';
import { projectsUx, sections } from '@/store/store-initials';

function ProjectTile({ urlProject: url, preview, caption, info }: ProjectType) {
    return (
        <section className="p-4 bg-slate-800">
            <a className="flex items-center justify-between space-x-4" href={url} target="_blank">

                <div className="self-start">
                    <div className="hoverurl inline-block uppercase">
                        {caption}
                    </div>
                    <div className="">
                        {info}
                    </div>
                </div>

                <div className="flex-none w-24 h-auto">
                    <img src={preview} alt="" />
                </div>
            </a>
        </section>
    );
}

function Section({ section }: { section: SectionType; }) {
    return (
        <div className="w-full max-w-xl">
            <div className="">
                {section.name}
            </div>

            <div className="flex flex-col justify-evenly space-y-2 overflow-y-auto">
                {section.projects.map((project, idx) => (
                    <ProjectTile {...project} key={idx} />
                ))}
            </div>
        </div>
    );
}

export function Section2_Main() {
    return (
        <main className="flex-1 flex flex-col items-center space-y-12 overflow-auto">
            {sections.map((section, idx) => <Section section={section} key={idx} />)}
        </main>
    );
}
