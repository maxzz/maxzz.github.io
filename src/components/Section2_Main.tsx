import React from 'react';
import { ProjectType } from '@/store/store-types';
import { projectsUx } from '@/store/store-initials';

function ProjectTile({ urlProject: url, preview, caption, info }: ProjectType) {
    return (
        <section className="p-4 bg-slate-800">
            <a className="flex items-center justify-between space-x-4" href={url} target="_blank">
                <div className="self-start">
                    <div className="hoverurl inline-block">{caption}</div>
                    <div className="">{info}</div>
                </div>
                <div className="flex-none w-24 h-auto"><img src={preview} alt="" /></div>
            </a>
        </section>
    );
}

export function Section2_Main() {
    return (
        <main className="flex-1 overflow-hidden">
            <div className="m-auto max-w-xl h-full flex flex-col justify-evenly space-y-2 overflow-y-auto">
                {projectsUx.map((project, idx) => (
                    <ProjectTile {...project} key={idx} />
                ))}
            </div>
        </main>
    );
}
