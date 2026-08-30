import { toast } from "sonner";
import { XIcon } from "lucide-react";
import { type ProjectType } from "@maxzz/db-apps";
import { ProjectThreeButtonsActions } from "@/components/2-main/0-all/3-project-3-buttons";

export function PrivateRepoNoticeToast({ project, toastId }: { project: ProjectType; toastId: number | string; }) {
    return (
        <div className="relative flex w-72 flex-col gap-4 rounded-lg bg-popover p-2.5 pr-8 text-xs text-popover-foreground shadow-md ring-1 ring-foreground/10">
            <button
                type="button"
                className="absolute top-1.5 right-1.5 rounded-sm p-0.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                aria-label="Dismiss"
                onClick={() => toast.dismiss(toastId)}
            >
                <XIcon className="size-3.5" />
            </button>

            <div className="flex flex-col gap-1">
                <div className="text-sm font-medium uppercase">{project.id}</div>
                <p className="text-muted-foreground">
                    This project is in a private repository.
                </p>
            </div>

            <div className="flex justify-start">
                <ProjectThreeButtonsActions
                    className="[&>div]:text-slate-600 [&>div]:hover:bg-slate-200 [&>div]:hover:text-slate-900"
                    project={project}
                    inListItem={false}
                />
            </div>
        </div>
    );
}
