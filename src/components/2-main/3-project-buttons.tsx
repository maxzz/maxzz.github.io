import { type HTMLAttributes, type MouseEvent } from "react";
import { classNames } from "@/utils";
import { type ProjectType } from "@/store/store-types";
import { ButtonCopy } from "./4-project-button-copy";
import { SymbolGithubLogo, SymbolHardDrive, SymbolTv } from "../ui";

function ButtonShell({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("h-5 py-3 text-primary-500 hover:text-primary-200 hover:bg-primary-700 rounded active:scale-[.97] flex items-center", className)} {...rest}>
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

    /*
    async function OpenFromGithub2(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();

        try {
            const body = await fetch(`${urlGithub}/blob/master/package.json`);
            if (!body.ok) {
                throw new Error(body.statusText);
            }
            const obj = await body.json();
            console.log('obj', obj);
        } catch (error) {
            console.log('tm', error);
        }
    }
    */
    //TODO: open iframe and run clean up script there (but it still github frame w/ limited control for us)
    //TODO: prebuild github data during this app build

    return (
        <div className={classNames("text-xs flex items-center select-none", className)} {...rest}>

            <ButtonShell className={inListItem ? "px-px" : "p-1"} title="Open demo page">
                <a href={urlDemo} target="_blank" aria-label="Open demo page">
                    <SymbolTv className="w-4 h-4" />
                </a>
            </ButtonShell>

            <ButtonShell className={inListItem ? "px-px" : "p-1"} title={"Open source on GitHub\nCtrl+click to open project.json"} onClick={OpenFromGithub}>
                {/* <a href={`${urlGithub}/blob/master/package.json`} className="a111 hidden" target="_blank" aria-label="Open project.json on GitHub"> </a> */}
                <a href={urlGithub} target="_blank" aria-label="Open source code on GitHub">
                    <SymbolGithubLogo className="w-4 h-4" />
                </a>
            </ButtonShell>

            {localPath &&
                <ButtonShell className={inListItem ? "px-px" : "p-1"} title={`Copy path to the project location on your hard drive.\nCtrl+Click to copy path in Unix format\n${localPath}`}>
                    <ButtonCopy label={<SymbolHardDrive className="w-4 h-4" />} text={localPath} />
                </ButtonShell>
            }
            
        </div>
    );
}
