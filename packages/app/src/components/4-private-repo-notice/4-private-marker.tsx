import { LockIcon } from "lucide-react";
import { classNames } from "@/utils";

export function PrivateRepoMarker({ className }: { className?: string; }) {
    return (
        <span
            className={classNames("pb-1.25 inline-flex items-center text-slate-400", className)}
            title="Private repository"
        >
            <LockIcon className="size-3" aria-label="Private repository" />
        </span>
    );
}
