import { Fragment, type HTMLAttributes, type ReactNode } from "react";
import { classNames } from "@/utils";
import { IconJotai, IconJs, IconNpm, IconReact, IconStackJotai, IconStackNpmLines, IconStackReact, IconStackTailwind, IconStackVue, IconTailwind, IconVue } from "../ui/icons";
import { SymbolManualMode, SymbolReactSpring, SymbolStitches } from "../ui/icons/symbols";

export function ProjectStack({ stack, className, ...rest }: { stack?: string[]; } & HTMLAttributes<HTMLDivElement>) {
    return (<>
        {stack &&
            <div className={classNames("pb-1 inline-flex items-center space-x-px text-sky-700 uppercase whitespace-nowrap cursor-default select-none", className)} {...rest}>
                {stack.map(
                    (name, idx) => {
                        const Item = stackComponentsNew[name] ||
                            <div className="px-0.5" title={name}>
                                {name}
                            </div>;
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

const stackComponentsNew: Record<string, ReactNode> = {
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

const stackComponents: Record<string, ReactNode> = {
    react: <IconReact className="size-4" title="React" />,
    jotai: <IconJotai className="size-3.5 pr-0.5 text-sky-700" title="Jotai" />,
    vue: <IconVue className="size-3" title="Vue" />,
    tw: <IconTailwind className="size-4" strokeWidth={.5} title="Tailwind" />,
    npm: <IconNpm className="w-4 text-sky-700" title="npm" />,
    js: <IconJs className="size-3 text-sky-700" title="JS" />,
    stitches: <SymbolStitches className="size-3 text-sky-700" title="@stitches/react" />,
    'react-spring': <SymbolReactSpring className="size-3 text-sky-700/70" title="@react-spring/web" />,
    'react-use-gesture': <SymbolManualMode className="size-3 text-sky-700" title="@use-gesture/react" />,
};
