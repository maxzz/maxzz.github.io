import { type HTMLAttributes } from "react";
import { classNames } from "@/utils";
import { IconSunnyvale } from "../ui";

export function Section3_Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("h-12 text-xs bg-black text-slate-600 flex items-center justify-center", className)} {...rest}>
            <p>
                Created by Max Zakharzhevskiy.
            </p>

            <IconSunnyvale className="size-5" />

            <p className="hover:underline cursor-pointer">
                Open sourced on <a href="https://github.com/maxzz/maxzz.github.io" target="_blank" rel="noopener">GitHub</a>.
            </p>
        </div>
    );
}
