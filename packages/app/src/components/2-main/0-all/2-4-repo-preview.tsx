import { type HTMLAttributes } from "react";
import { classNames } from "@/utils/classnames";
import { type ImageUrl, type ProjectType } from "@maxzz/db-apps";

export function RepoPreview({ project }: { project: ProjectType; }) {
    const { id, urlDemo, urlPreview, } = project;
    const isSvg = typeof urlPreview === "string" && urlPreview.endsWith(".svg");
    return (
        <div className={pictureClasses}>
            <a className={classNames("transition-transform border shadow-sm", isSvg ? "hover:scale-125 hover:border-slate-700" : "hover:scale-150")} href={urlDemo} target="_blank" title={`Open demo page for\n${id}`}>
                <RepoPicture src={urlPreview} />
            </a>
        </div>
    );
}

const pictureClasses = "\
relative col-start-2 col-end-3 row-span-full w-24 h-auto \
flex items-center \
bg-primary-900 \
border-primary-700/70 \
shadow-primary-600/50 \
hover:shadow-primary-400/50";

function RepoPicture({ className, src, ...rest }: { src: ImageUrl; } & HTMLAttributes<HTMLPictureElement>) {
    const srcUrl = Array.isArray(src) ? src : [{ src: src }];
    const url = srcUrl[srcUrl.length - 1].src;
    return (
        <picture className={classNames("object-contain grayscale hover:grayscale-0", className)} {...rest}>
            <img className="max-h-48" src={url} alt="project preview" />
        </picture>
    );
}
