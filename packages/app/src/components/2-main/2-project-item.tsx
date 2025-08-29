import { type HTMLAttributes } from "react";
import { classNames } from "@/utils";
import { ImageUrl, ProjectType } from "@maxzz/db-apps";
import { ProjectStack } from "./5-project-stack-icons";
import { ProjectButtons } from "./3-project-buttons";

export function ProjectItem_Grid({ project }: { project: ProjectType; }) {
    const { id, description, urlDemo, urlPreview, } = project;
    return (
        <section className="flex flex-col">
            <ProjectName name={id} />

            <div className="flex-1 p-4 grid grid-rows-[1fr_auto] grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-slate-400 bg-slate-800 rounded">
                <div className="text-sm">
                    {description}
                </div>

                <ProjectButtons className="-mb-2" project={project} inListItem={false} />

                <div className="relative col-start-2 col-end-3 row-span-full w-24 h-auto flex items-center bg-primary-900 border-primary-700/70 shadow-primary-600/50 hover:shadow-primary-400/50">
                    <div className="hover:scale-[1.17] transition-transform border shadow">
                        <a href={urlDemo} target="_blank" title={`Open demo page for\n${id}`}>
                            <ProjectPicture src={urlPreview} />
                        </a>
                    </div>
                </div>
            </div >
        </section>
    );
}

export function ProjectItem_List({ project }: { project: ProjectType; }) {
    const { id, stack } = project;
    return (
        <section className="flex items-center text-sm">
            <ProjectButtons className="" project={project} inListItem={true} />
            <ProjectName className="mx-2" name={id} />
            <ProjectStack className="flex text-[.6rem] text-sky-700" stack={stack} />
        </section>
    );
}

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

function ProjectPicture({ className, src, ...rest }: { src: ImageUrl; } & HTMLAttributes<HTMLPictureElement>) {
    const srcUrl = Array.isArray(src) ? src : [{ src: src }];
    const url = srcUrl[srcUrl.length - 1].src;
    return (
        <picture className={classNames("object-contain max-h-[177px] grayscale hover:grayscale-0", className)} {...rest}>
            <img src={url} alt="project preview" />
        </picture>
    );
}
