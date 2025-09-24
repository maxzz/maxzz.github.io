import { type HTMLAttributes } from "react";
import { classNames } from "@/utils";
import { ProjectType } from "@maxzz/db-apps";
import { ProjectStack } from "./5-project-stack-icons";
import { ProjectThreeButtons } from "./3-project-three-buttons";

export function ProjectItem_List({ project }: { project: ProjectType; }) {
    const { id, stack } = project;
    return (
        <section className="text-sm flex items-center">
            <ProjectThreeButtons className="" project={project} inListItem={true} />
            <ProjectName className="mx-2" name={id} />
            <ProjectStack className="flex text-[.6rem] text-sky-700" stack={stack} />
        </section>
    );
}

export function ProjectName({ name, className, ...rest }: { name: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pb-1 text-slate-300 uppercase whitespace-nowrap", className)} {...rest}>
            {name}
        </div>
    );
}
