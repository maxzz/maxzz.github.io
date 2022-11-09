import { HTMLAttributes } from "react";
import { classNames } from "@/utils/classnames";
import { ImageUrl, ProjectType } from "@/store/store-types";
import { IconGithubLogo, IconHardDrive, IconTv } from '../UI/UIIcons';
import { ProjectStack } from "./ProjectStackIcons";
import { ButtonCopy } from "./ProjectButtonCopy";

function ProjectName({ name, className, ...rest }: { name: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pb-1 text-slate-300 uppercase whitespace-nowrap", className)} {...rest}>
            {name}
        </div>
    );
}

// function Image({ className, src }: { src: string; } & HTMLAttributes<HTMLImageElement>) {
//     return (
//         <img className={classNames("object-contain max-h-[177px] grayscale hover:grayscale-0", className)} src={src} alt="project preview" />
//     );
// }

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

function Picture({ className, src, ...rest }: { src: ImageUrl; } & HTMLAttributes<HTMLPictureElement>) {
    const srcUrl = Array.isArray(src) ? src : [{ src: src }];
    const url = srcUrl[srcUrl.length - 1].src;
    return (
        <picture className={classNames("object-contain max-h-[177px] grayscale hover:grayscale-0", className)} {...rest}>
            <img src={url} alt="project preview" />
        </picture>
    );
}


function ProjectIcons({ project, inListItem, className, ...rest }: { project: ProjectType; inListItem: boolean; } & HTMLAttributes<HTMLDivElement>) {
    const { urlGithub, urlDemo, localPath, } = project;
    return (
        <div className={classNames("text-xs flex items-center select-none", className)} {...rest}>
            <ButtonShell className={inListItem ? "px-px" : "p-1"} title="Open demo page">
                <a href={urlDemo} target="_blank" aria-label="Open demo page">
                    <IconTv className="w-4 h-4 fill-current" />
                </a>
            </ButtonShell>

            <ButtonShell className={inListItem ? "px-px" : "p-1"} title="Open source code on GitHub">
                <a href={urlGithub} target="_blank" aria-label="Open source code on GitHub">
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

export function ProjectTile({ project }: { project: ProjectType; }) {
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

export function ProjectListItem({ project }: { project: ProjectType; }) {
    const { id, stack } = project;
    return (
        <section className="flex items-center text-sm">
            <ProjectIcons className="" project={project} inListItem={true} />
            <ProjectName className="mx-2" name={id} />
            <ProjectStack className="flex text-[.6rem] text-sky-700" stack={stack} />
        </section>
    );
}
