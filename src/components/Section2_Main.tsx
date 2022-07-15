import React, { HTMLAttributes } from 'react';
import { ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';
import { UIArrow } from './UI/UIArrow';
import { useAtom } from 'jotai';
import { sectionOpenAtoms } from '@/store/store';
import { UIAccordion } from './UI/UIAccordion';

function ButtonShell({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className="h-5 px-1.5 py-4 hover:bg-primary-700 hover:text-primary-200 rounded active:scale-[.97] flex items-center"
            {...rest}
        >
            {children}
        </div>
    );
}

function ButtonCopy({ label, text }: { label: string; text: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(text); //TODO: show copy notice
            }}
        >
            {label}
        </button>
    );
}

function TileProject({ caption, description, urlGithub, urlDemo, previewUrl, localPath, }: ProjectType) {
    return (
        <section className="flex flex-col">
            <div className="pb-1 text-slate-300 uppercase">
                {caption}
            </div>

            <div className="flex-1 p-4 grid grid-rows-[1fr_auto] grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-slate-400 bg-slate-800 rounded">
                <div className="text-sm">
                    {description}
                </div>

                <div className="-mb-2 text-xs flex select-none">
                    <ButtonShell title="Open source code on GitHub"> <a href={urlGithub} target="_blank">Github</a> </ButtonShell>
                    <ButtonShell title="Open demo project"> <a href={urlDemo} target="_blank">Demo</a> </ButtonShell>
                    {localPath && <ButtonShell title="Copy path on local hard drive"> <ButtonCopy label="Local" text={localPath} /> </ButtonShell>}
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
        <div className="text-2xl p-4 border-slate-400 border rounded cursor-pointer" onClick={() => setSectionOpen((v) => !v)}>
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
                <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-2 overflow-y-auto">
                    {section.projects.map((project, idx) => (
                        <TileProject {...project} key={idx} />
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
