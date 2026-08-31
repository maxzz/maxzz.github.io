import { type HTMLAttributes } from "react";
import { classNames } from "@/utils/classnames";
import { LockIcon } from "lucide-react";
import { ProjectStack } from "./5-project-stack-icons";
import { Project_3_Buttons } from "./3-project-3-buttons";
import { type ProjectType, type SectionType } from "@maxzz/db-apps";

export function ProjectsAsList({ section }: { section: SectionType; }) {
    return (
        <div className="columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
            {section.projects.map(
                (project, idx) => (
                    <ProjectItem_List project={project} key={idx} />
                )
            )}
        </div>
    );
}

function ProjectItem_List({ project }: { project: ProjectType; }) {
    const { id, stack } = project;
    return (
        <section className="text-sm flex items-center gap-x-2">
            <Project_3_Buttons className="" project={project} inListItem={true} />
            <ProjectName className="" name={id} />
            {project.private && <PrivateRepoMarker />}
            <ProjectStack className="flex text-[.6rem] text-sky-700" stack={stack} />
        </section>
    );
}

export function ProjectName({ name, className, ...rest }: { name: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pb-1 text-sm text-slate-300 uppercase whitespace-nowrap", className)} {...rest}>
            {name}
        </div>
    );
}

export function PrivateRepoMarker({ className }: { className?: string; }) {
    return (
        <span className={classNames("-mr-1 pb-1.25 inline-flex items-center text-sky-500", className)} title="Private repository">
            <LockIcon className="size-3" aria-label="Private repository" />
        </span>
    );
}
