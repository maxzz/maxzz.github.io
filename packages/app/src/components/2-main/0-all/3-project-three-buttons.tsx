import { type HTMLAttributes, type MouseEvent } from "react";
import { classNames } from "@/utils";
import { type ProjectType } from "@maxzz/db-apps";
import { ButtonCopyPath } from "./4-project-button-copy-path";
import { SymbolGithubLogo, SymbolHardDrive, SymbolTv } from "../../ui";

export function ProjectThreeButtons({ project, inListItem, className, ...rest }: { project: ProjectType; inListItem: boolean; } & HTMLAttributes<HTMLDivElement>) {
    const { urlGithub, urlDemo, localPath, } = project;

    return (
        <div className={classNames("text-xs flex items-center select-none", className)} {...rest}>
            <ButtonShell
                className={inListItem ? "px-px" : "p-1"}
                title="Open demo page"
            >
                <a href={urlDemo} target="_blank" aria-label="Open demo page">
                    <SymbolTv className="size-4" />
                </a>
            </ButtonShell>

            <ButtonShell
                className={inListItem ? "px-px" : "p-1"}
                title={"Open source on GitHub\nCtrl+click to open project.json"}
                onClick={(event) => OpenFromGithub(event, urlGithub)}
            >
                <a href={urlGithub} target="_blank" aria-label="Open source code on GitHub">
                    <SymbolGithubLogo className="size-4" />
                </a>
            </ButtonShell>

            {localPath && (
                <ButtonShell
                    className={inListItem ? "px-px" : "p-1"}
                    title={`Copy path to the project location on your hard drive.\nCtrl+Click to copy path in Unix format\n${localPath}`}
                >
                    <ButtonCopyPath label={<SymbolHardDrive className="size-4" />} text={localPath} />
                </ButtonShell>
            )}
        </div>
    );
}

function ButtonShell({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("h-5 py-3 text-primary-500 hover:text-primary-200 hover:bg-primary-700 rounded active:scale-[.97] flex items-center", className)} {...rest}>
            {children}
        </div>
    );
}

function OpenFromGithub(event: MouseEvent, urlGithub: string) {
    if (event.ctrlKey) {
        event.stopPropagation();
        event.preventDefault();
        window.open(`${urlGithub}/blob/master/package.json`, '_blank');
    }
}
