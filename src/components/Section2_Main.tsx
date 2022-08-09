import React, { Fragment, HTMLAttributes, ReactNode, useState, } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { sectionOpenAtoms, ShowType, uiOptionsAtoms } from '@/store/store';
import { ImageUrl, ProjectType, SectionType } from '@/store/store-types';
import { sections } from '@/store/store-initials';
import { UIArrow } from './UI/UIArrow';
import { UIAccordion } from './UI/UIAccordion';
import { IconCheckFrameless, IconGithubLogo, IconHardDrive, IconJotai, IconJs, IconNpm, IconReact, IconTailwind, IconTv, IconVue } from './UI/UIIcons';
import { classNames } from '@/utils/classnames';
import { a, easings, useTransition } from '@react-spring/web';

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
                <div className="leading-5 left-t">{section.name}</div>
                <UIArrow className="w-5 h-5" open={sectionOpen} />
            </div>
        </div>
    );
}

function ButtonShell({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames(
            "h-5 py-3 text-primary-500 hover:text-primary-200 hover:bg-primary-700 rounded active:scale-[.97] flex items-center",
            className
        )} {...rest}
        >
            {children}
        </div>
    );
}

function MountCopyNotice({ show, setShow, items }: { show: boolean; setShow?: (v: boolean) => void; items: ReactNode[]; }) {
    const transitions = useTransition(Number(show), {
        from: { scale: 0, opacity: 0, },
        enter: { scale: 1, opacity: 1, },
        leave: { scale: 0, opacity: 0, delay: 100, config: { duration: 300, easing: easings.easeOutQuad }, },
        onRest: ({ finished }) => show && finished && setShow?.(false),
    });
    return transitions((styles, item) => <a.div style={styles} className="absolute left-0 top-0"> {items[item]} </a.div>);
}

function ButtonCopy({ label, text }: { label: ReactNode; text: string; }) {
    const [showNotice, setShowNotice] = useState(false);
    return (
        <button
            className="relative w-4 h-4"
            onClick={(event) => {
                navigator.clipboard.writeText(event.ctrlKey ? text : text.replace(/\//g, '\\'));
                setShowNotice(true);
            }}
        >
            <MountCopyNotice show={showNotice} setShow={setShowNotice} items={[
                label,
                <IconCheckFrameless className="w-4 h-4 text-green-100 bg-emerald-500 stroke-[2] rounded-sm" />,
            ]} />
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

function ProjectIcons({ project, inListItem, className, ...rest }: { project: ProjectType; inListItem: boolean; } & HTMLAttributes<HTMLDivElement>) {
    const { urlGithub, urlDemo, localPath, } = project;
    return (
        <div className={classNames("text-xs flex items-center select-none", className)} {...rest}>
            <ButtonShell className={inListItem ? "px-px" : "p-1"} title="Open demo page">
                <a href={urlDemo} target="_blank">
                    <IconTv className="w-4 h-4 fill-current" />
                </a>
            </ButtonShell>

            <ButtonShell className={inListItem ? "px-px" : "p-1"} title="Open source code on GitHub">
                <a href={urlGithub} target="_blank">
                    <IconGithubLogo className="w-4 h-4 fill-current" />
                </a>
            </ButtonShell>

            {localPath &&
                <ButtonShell className={inListItem ? "px-px" : "p-1"} title={`Copy path on local hard drive\n(ctrl+click to copy in Unix format)\n\n${localPath}`}>
                    <ButtonCopy label={<IconHardDrive className="w-4 h-4 fill-current" />} text={localPath} />
                </ButtonShell>
            }
        </div>
    );
}

function ProjectName({ name, className, ...rest }: { name: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pb-1 text-slate-300 uppercase whitespace-nowrap", className)} {...rest}>
            {name}
        </div>
    );
}

const stackComponents: Record<string, ReactNode> = {
    react: <IconReact className="w-4 h-4" title="React" />,
    jotai: <IconJotai className="w-3.5 h-3.5 pr-0.5 text-sky-700" title="Jotai" />,
    vue: <IconVue className="w-3 h-3" title="Vue" />,
    tw: <IconTailwind className="w-4 h-4" strokeWidth={.5} title="Tailwind" />,
    npm: <IconNpm className="w-4 text-sky-700" title="npm" />,
    js: <IconJs className="w-3 h-3 text-sky-700" title="JS" />,
};

function ProjectStack({ stack, className, ...rest }: { stack?: string[]; } & HTMLAttributes<HTMLDivElement>) {
    return (<>
        {stack &&
            <div className={classNames("pb-1 inline-flex items-center text-sky-500 uppercase whitespace-nowrap cursor-default select-none", className)} {...rest}>
                {stack.map((name, idx) => (
                    <Fragment key={idx}>
                        {stackComponents[name] || <div className="px-0.5" title={name}>{name}</div>}
                    </Fragment>
                ))}
            </div>
        }
    </>);
}

function ProjectTile({ project }: { project: ProjectType; }) {
    const { id, description, urlDemo, urlPreview, } = project;
    return (
        <section className="flex flex-col">
            <ProjectName name={id} />

            <div className="flex-1 p-4 grid grid-rows-[1fr_auto] grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-slate-400 bg-slate-800 rounded">
                <div className="text-sm">
                    {description}
                </div>

                <ProjectIcons className="-mb-2" project={project} inListItem={false} />

                <div className="relative col-start-2 col-end-3 row-span-full w-24 h-auto flex items-center bg-primary-900 border-primary-700/70 shadow-primary-600/50 hover:shadow-primary-400/50">
                    <div className="hover:scale-[1.17] transition-transform border shadow">
                        <a href={urlDemo} target="_blank" title={`Open demo page for\n${id}`}><Picture src={urlPreview} /></a>
                    </div>
                </div>
            </div >
        </section>
    );
}

function ProjectListItem({ project }: { project: ProjectType; }) {
    const { id, stack } = project;
    return (
        <section className="flex items-center text-sm">
            <ProjectIcons className="" project={project} inListItem={true} />
            <ProjectName className="mx-2" name={id} />
            <ProjectStack className="flex text-[.6rem] text-sky-700" stack={stack} />
        </section>
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

