import React from 'react';
import { ProjectTitleProps } from '@/store/store-types';
import { projectsList } from '@/store/store-initials';

function ProjectTile({ urlProject: url, preview, caption, info }: ProjectTitleProps) {
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
                {projectsList.map((project, idx) => (
                    <ProjectTile {...project} key={idx} />
                ))}
            </div>
        </main>
    );
}
