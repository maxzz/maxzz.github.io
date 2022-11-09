import { Fragment, HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/utils/classnames";
import { IconJotai, IconJs, IconNpm, IconReact, IconStackJotai, IconStackNpmLines, IconStackReact, IconStackTailwind, IconStackVue, IconTailwind, IconVue } from '../UI/UIIcons';

const stackComponents: Record<string, ReactNode> = {
    react: <IconReact className="w-4 h-4" title="React" />,
    jotai: <IconJotai className="w-3.5 h-3.5 pr-0.5 text-sky-700" title="Jotai" />,
    vue: <IconVue className="w-3 h-3" title="Vue" />,
    tw: <IconTailwind className="w-4 h-4" strokeWidth={.5} title="Tailwind" />,
    npm: <IconNpm className="w-4 text-sky-700" title="npm" />,
    js: <IconJs className="w-3 h-3 text-sky-700" title="JS" />,
};

const stackComponentsNew: Record<string, ReactNode> = {
    react: <IconStackReact className="w-4 h-4" title="React" />,
    jotai: <IconStackJotai className="w-3.5 h-3.5" title="Jotai" />,
    vue: <IconStackVue className="w-4 h-4" title="Vue" />,
    tw: <IconStackTailwind className="w-4 h-4" title="Tailwind" />,
    npm: <IconStackNpmLines className="w-4 h-4" title="npm" />,
    js: <IconJs className="w-3 h-3 text-sky-700" title="JS" />,
};

export function ProjectStack({ stack, className, ...rest }: { stack?: string[]; } & HTMLAttributes<HTMLDivElement>) {
    return (<>
        {stack &&
            <div className={classNames("pb-1 inline-flex items-center space-x-px text-sky-700 uppercase whitespace-nowrap cursor-default select-none", className)} {...rest}>
                {stack.map((name, idx) => (
                    <Fragment key={idx}>
                        {stackComponentsNew[name] ||
                            <div className="px-0.5" title={name}>
                                {name}
                            </div>
                        }
                    </Fragment>
                ))}
            </div>
        }
    </>);
}
