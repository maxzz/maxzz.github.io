import React, { Fragment, HTMLAttributes, ReactNode, useState, } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from '@/store/store';
import { ImageUrl, ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';
import { UIArrow } from '../UI/UIArrow';
import { UIAccordion } from '../UI/UIAccordion';
import { IconCheckFrameless, IconGithubLogo, IconHardDrive, IconJotai, IconJs, IconNpm, IconReact, IconStackJotai, IconStackNpm, IconStackNpmLines, IconStackReact, IconStackTailwind, IconStackVue, IconTailwind, IconTv, IconVue } from '../UI/UIIcons';
import { classNames } from '@/utils/classnames';
import { a, easings, useTransition } from '@react-spring/web';
import { ProjectListItem, ProjectTile } from './ProjectItem';

function SectionName1({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="mb-2 px-4 py-3 text-2xl border-slate-400 border rounded cursor-pointer select-none" onClick={() => setSectionOpen((v) => !v)}>
            <div className="flex items-center space-y-2">
                <div className="leading-5 left-t">{section.name}</div>
                <UIArrow className="w-5 h-5" open={sectionOpen} />
            </div>
        </div>
    );
}

function SectionName2({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="mb-2 text-2xl cursor-pointer select-none" onClick={() => setSectionOpen((v) => !v)}>
            <div className="px-4 py-3 max-w-min border-slate-400 border rounded flex items-center space-y-2">
                <div className="w-max leading-5 left-t">{section.name}</div>
                <UIArrow className="w-5 h-5" open={sectionOpen} />
            </div>
        </div>
    );
}

function Section({ section }: { section: SectionType; }) {
    const sectionOpen = useAtomValue(sectionOpenAtoms(section.name));
    const showType = useAtomValue(uiOptionsAtoms.showTypeAtom);
    return (
        <div className="w-full px-4 max-w-[96rem] grid grid-rows-[auto_minmax(0,1fr)]">
            <SectionName2 section={section} />

            <UIAccordion open={sectionOpen} >
                <>
                    {showType === ShowType.list
                        ?
                        <div className="columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
                            {section.projects.map((project, idx) => (
                                <ProjectListItem project={project} key={idx} />
                            ))}
                        </div>
                        :
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[minmax(250px,1fr)] gap-2">
                            {section.projects.map((project, idx) => (
                                <ProjectTile project={project} key={idx} />
                            ))}
                        </div>
                    }
                </>
            </UIAccordion>
        </div>
    );
}

export function Section2_Main() {
    return (
        // <main className="flex-1 my-4 flex flex-col items-center space-y-4 overflow-y-overlay smallscroll">
        <main className="flex-1 my-4 space-y-4 overflow-y-overlay smallscroll">
            {sections.map((section, idx) => <Section section={section} key={idx} />)}
        </main>
    );
}

//TODO: optimize icons to local font

