import { HTMLAttributes, MouseEvent } from "react";
import { ProjectType } from "@/store/store-types";
import { classNames } from "@/utils/classnames";
import { ButtonCopy } from "./ProjectButtonCopy";
import { IconGithubLogo, IconHardDrive, IconTv } from "../UI/Icons/UIIconSymbols";

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

export function ProjectButtons({ project, inListItem, className, ...rest }: { project: ProjectType; inListItem: boolean; } & HTMLAttributes<HTMLDivElement>) {
    const { urlGithub, urlDemo, localPath, } = project;
    function OpenFromGithub(event: MouseEvent) {
        if (event.ctrlKey) {
            event.stopPropagation();
            event.preventDefault();
            
            // const link = document.querySelector('.a111') as HTMLAnchorElement;
            // console.log('link', link);
            // link?.click();

            window.open(`${urlGithub}/blob/master/package.json`, '_blank');
            
        }
    }
    return (
        <div className={classNames("text-xs flex items-center select-none", className)} {...rest}>
            <ButtonShell className={inListItem ? "px-px" : "p-1"} title="Open demo page">
                <a href={urlDemo} target="_blank" aria-label="Open demo page">
                    <IconTv className="w-4 h-4" />
                </a>
            </ButtonShell>

            <ButtonShell className={inListItem ? "px-px" : "p-1"} title={"Open source code on GitHub\nCtrl+click to open project.json"} onClick={OpenFromGithub}>
                {/* <a href={`${urlGithub}/blob/master/package.json`} className="a111 hidden" target="_blank" aria-label="Open project.json on GitHub"> </a> */}
                <a href={urlGithub} target="_blank" aria-label="Open source code on GitHub">
                    <IconGithubLogo className="w-4 h-4" />
                </a>
            </ButtonShell>

            {localPath &&
                <ButtonShell className={inListItem ? "px-px" : "p-1"} title={`Copy path on local hard drive.\nCtrl+click to copy in Unix format\n${localPath}`}>
                    <ButtonCopy label={<IconHardDrive className="w-4 h-4" />} text={localPath} />
                </ButtonShell>
            }
        </div>
    );
}
