import React from 'react';
import { ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';

function ProjectTile({ urlGithub: url, preview, caption, description: info }: ProjectType) {
    return (
        <section className="p-4 bg-slate-800 rounded">
            <a className="flex justify-between" href={url} target="_blank">

                <div className="flex flex-col items-start justify-between">
                    <div className="">
                        <div className="hoverurl inline-block uppercase">
                            {caption}
                        </div>
                        <div className="mt-2 text-sm">
                            {info}
                        </div>
                    </div>

                    <div className="text-sm flex space-x-2">
                        <button>Github</button>
                        <button>Demo</button>
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
