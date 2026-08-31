import { type HTMLAttributes } from "react";
import { classNames } from "@/utils/classnames";
import { LockIcon } from "lucide-react";

export function RepoName({ name, className, ...rest }: { name: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pb-1 text-sm text-slate-300 uppercase whitespace-nowrap", className)} {...rest}>
            {name}
        </div>
    );
}

export function PrivateRepoMarker({ className }: { className?: string; }) {
    return (
        <span className={classNames("pb-1.25 text-sky-500 inline-flex items-center -mr-1", className)} title="Private repository">
            <LockIcon className="size-3" aria-label="Private repository" />
        </span>
    );
}
