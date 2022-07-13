import React from 'react';
import { ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';

function ProjectTile({ caption, description, urlGithub, urlDemo, previewUrl, }: ProjectType) {
    return (
        <section className="p-4 grid grid-rows-[auto_1fr_auto] grid-cols-[1fr_auto] gap-x-4 gap-y-2 bg-slate-800 rounded">
            {/* <div className="flex justify-between">

                <div className="flex flex-col items-start justify-between">
                    <div className="">
                        <div className="hoverurl inline-block uppercase">
                            {caption}
                        </div>
                        <div className="mt-2 text-sm">
                            {description}
                        </div>
                    </div>

                    <div className="text-sm flex space-x-2">
                        <a className="" href={urlGithub} target="_blank">Github</a>
                        <a className="" href={urlDemo} target="_blank">Demo</a>
                    </div>
                </div>

                <div className="flex-none w-24 h-auto">
                    <img src={previewUrl} alt="" />
                </div>
            </div> */}


                <div className="">
                    <div className="hoverurl inline-block uppercase">
                        {caption}
                    </div>
                </div>

                <div className="text-sm">
                    {description}
                </div>

                <div className="text-sm flex space-x-2">
                    <a className="" href={urlGithub} target="_blank">Github</a>
                    <a className="" href={urlDemo} target="_blank">Demo</a>
                </div>

                <div className="col-start-2 col-end-3 row-span-full place-self-center w-24 h-auto">
                    <img src={previewUrl} alt="" />
                </div>

        </section >
    );
}

function Section({ section }: { section: SectionType; }) {
    return (
        <div className="w-full max-w-7xl">
            <div className="">
                {section.name}
            </div>

            <div className="mx-4 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-2 overflow-y-auto">
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
