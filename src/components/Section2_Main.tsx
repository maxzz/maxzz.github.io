import React, { HTMLAttributes, ReactNode, } from 'react';
import { useAtom } from 'jotai';
import { sectionOpenAtoms } from '@/store/store';
import { ImageUrl, ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';
import { UIArrow } from './UI/UIArrow';
import { UIAccordion } from './UI/UIAccordion';
import { IconGithubLogo, IconHardDrive, IconReact, IconTv, IconVue } from './UI/UIIcons';
import { classNames } from '@/utils/classnames';

function ButtonShell({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className="h-5 px-1 py-3 text-primary-500 hover:text-primary-200 hover:bg-primary-700 rounded active:scale-[.97] flex items-center"
            {...rest}
        >
            {children}
        </div>
    );
}

function ButtonCopy({ label, text }: { label: ReactNode; text: string; } & HTMLAttributes<HTMLDivElement>) {
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

function Picture({ className, src, ...rest }: { src: ImageUrl; } & HTMLAttributes<HTMLPictureElement>) {
    const srcUrl = Array.isArray(src) ? src : [{ src: src }];
    const url = srcUrl[srcUrl.length - 1].src;
    return (
        <picture className={classNames("object-contain max-h-[177px] grayscale hover:grayscale-0", className)} {...rest}>
            <img src={url} alt="project preview" />
        </picture>
    );
}

// function Image({ className, src }: { src: string; } & HTMLAttributes<HTMLImageElement>) {
//     return (
//         <img className={classNames("object-contain max-h-[177px] grayscale hover:grayscale-0", className)} src={src} alt="project preview" />
//     );
// }

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

                <div className="-mb-2 text-xs flex items-center select-none">
                    <ButtonShell title="Open demo project"> <a href={urlDemo} target="_blank"><IconTv className="w-4 h-4 fill-current" /></a> </ButtonShell>
                    <ButtonShell title="Open source code on GitHub"> <a href={urlGithub} target="_blank"><IconGithubLogo className="w-4 h-4 fill-current" /></a> </ButtonShell>
                    {localPath &&
                        <ButtonShell title={`Copy path on local hard drive\n${localPath}`}>
                            <ButtonCopy label={<IconHardDrive className="w-4 h-4 fill-current" />} text={localPath} />
                        </ButtonShell>
                    }
                    {/* <IconReact className="w-3 h-3" />
                    <IconVue className="w-3 h-3" /> */}
                </div>

                <div className="relative col-start-2 col-end-3 row-span-full w-24 h-auto flex items-center bg-primary-900 border-primary-700/70 shadow-primary-600/50 hover:shadow-primary-400/50">
                    <div className="hover:scale-[1.17] transition-transform border shadow">
                        <a href={urlDemo} target="_blank" title="Open demo project"><Picture src={previewUrl} /></a>
                    </div>
                </div>
            </div >
        </section>
    );
}

function SectionName({ section }: { section: SectionType; }) {
    const [sectionOpen, setSectionOpen] = useAtom(sectionOpenAtoms(section.name));
    return (
        <div className="text-2xl p-4 border-slate-400 border rounded cursor-pointer" onClick={() => setSectionOpen((v) => !v)}>
            <div className="flex items-center rotate-180 space-y-2" style={{ writingMode: 'vertical-rl' }}>
                <div className="leading-5 left-t">{section.name}</div>
                <UIArrow className="w-5 h-5 pt-1 rotate-180" open={sectionOpen} />
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
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[minmax(250px,1fr)] gap-2 overflow-y-auto">
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
