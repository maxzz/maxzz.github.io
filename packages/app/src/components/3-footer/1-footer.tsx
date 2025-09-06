import { type HTMLAttributes } from "react";
import { classNames } from "@/utils";
import { IconSunnyvale } from "../ui";

export function Section3_Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pb-1 h-12 text-xs bg-black text-slate-600 flex items-center justify-center", className)} {...rest}>
            <p>
                <a href="https://github.com/maxzz" target="_blank" rel="noopener">Created by Max Zakharzhevskiy.</a>
            </p>

            <IconSunnyvale className="pt-1 size-8" />

            <a className="hover:underline cursor-pointer" href="https://github.com/maxzz/maxzz.github.io" target="_blank" rel="noopener">Open sourced on GitHub</a>.
        </div>
    );
}
