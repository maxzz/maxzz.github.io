import { type HTMLAttributes, type MouseEvent } from "react";
import { type ProjectType } from "@maxzz/db-apps";
import { ProjectThreeButtons as ProjectThreeButtonsActions } from "@/components/2-main/0-all/3-project-three-buttons";
import { requestPrivateRepoNotice } from "./8-atoms";

export function ProjectThreeButtons({ project, onClickCapture, ...rest }: { project: ProjectType; inListItem: boolean; } & HTMLAttributes<HTMLDivElement>) {
    function onGuardedClick(event: MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        event.stopPropagation();
        requestPrivateRepoNotice(project);
    }

    return (
        <ProjectThreeButtonsActions
            {...rest}
            project={project}
            onClickCapture={project.private ? onGuardedClick : onClickCapture}
        />
    );
}
