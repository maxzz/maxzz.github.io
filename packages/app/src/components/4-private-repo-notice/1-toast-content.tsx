import { useAtomValue } from "jotai";
import { toast } from "sonner";
import { XIcon } from "lucide-react";
import { ProjectThreeButtons } from "@/components/2-main/0-all/3-project-three-buttons";
import { privateRepoNoticeAtom } from "./8-atoms";

export function PrivateRepoNoticeToast() {
    const notice = useAtomValue(privateRepoNoticeAtom);
    if (!notice) {
        return null;
    }

    return (
        <div className="relative flex w-72 flex-col gap-4 rounded-lg bg-popover p-2.5 pr-8 text-xs text-popover-foreground shadow-md ring-1 ring-foreground/10">
            <button
                type="button"
                className="absolute top-1.5 right-1.5 rounded-sm p-0.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                aria-label="Dismiss"
                onClick={() => toast.dismiss(`private-repo-${notice.project.id}`)}
            >
                <XIcon className="size-3.5" />
            </button>

            <div className="flex flex-col gap-1">
                <div className="text-sm font-medium">Private repository</div>
                <p className="text-muted-foreground">
                    This project is in a private repository.
                </p>
            </div>

            <div className="flex justify-start">
                <ProjectThreeButtons
                    className="[&>div]:text-slate-600 [&>div]:hover:bg-slate-200 [&>div]:hover:text-slate-900"
                    project={notice.project}
                    inListItem={false}
                />
            </div>
        </div>
    );
}
