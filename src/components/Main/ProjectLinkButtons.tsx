import { ProjectType } from "@/store/store-types";
import { classNames } from "@/utils/classnames";
import { HTMLAttributes } from "react";
import { IconGithubLogo, IconHardDrive, IconTv } from "../UI/UIIcons";
import { ButtonCopy } from "./ProjectButtonCopy";

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

export function ProjectIcons({ project, inListItem, className, ...rest }: { project: ProjectType; inListItem: boolean; } & HTMLAttributes<HTMLDivElement>) {
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
