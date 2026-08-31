import { Fragment, type HTMLAttributes, type ReactNode } from "react";
import { classNames } from "@/utils/classnames";
import { IconJs, IconStackJotai, IconStackNpmLines, IconStackReact, IconStackTailwind, IconStackVue } from "../../ui/icons";
import { SymbolManualMode, SymbolReactSpring, SymbolStitches } from "../../ui/icons/symbols";

export function ProjectStack({ stack, className, ...rest }: { stack?: string[]; } & HTMLAttributes<HTMLDivElement>) {
    return (<>
        {stack &&
            <div className={classNames(baseClasses, className)} {...rest}>
                {stack.map(
                    (name, idx) => {
                        const Item =
                            stackComponentIcons[name] || (
                                <div className="px-0.5" title={name}>
                                    {name}
                                </div>
                            );
                        return (
                            <Fragment key={idx}>
                                {Item}
                            </Fragment>
                        );
                    }
                )}
            </div>
        }
    </>);
}

const stackComponentIcons: Record<string, ReactNode> = {
    react: <IconStackReact className="size-3.5" title="React" />,
    jotai: <IconStackJotai className="size-3.5" title="Jotai" />,
    vue: <IconStackVue className="size-3.5" title="Vue" />,
    tw: <IconStackTailwind className="size-4" title="Tailwind" />,
    npm: <IconStackNpmLines className="size-4" title="npm" />,
    js: <IconJs className="size-3 text-sky-700" title="JS" />,
    stitches: <SymbolStitches className="size-3 text-sky-700" title="@stitches/react" />,
    'react-spring': <SymbolReactSpring className="size-3 text-sky-700/70" title="@react-spring/web" />,
    'react-use-gesture': <SymbolManualMode className="size-3 text-sky-700" title="@use-gesture/react" />,
};

const baseClasses = "\
text-[.5rem] \
pb-1 uppercase \
text-sky-700 \
cursor-default select-none whitespace-nowrap \
inline-flex items-center gap-x-px";
