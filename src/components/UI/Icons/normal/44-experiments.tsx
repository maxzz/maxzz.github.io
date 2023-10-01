import { HTMLAttributes, SVGProps } from "react";
import { classNames } from "@/utils/classnames";

export function IconExperiments({ className, title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) { // microscope
    return (
        <svg viewBox="0 0 139 139" className={classNames("fill-transparent", className)} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} {...rest}>
            {title && <title>{title}</title>}
            <path d="M34 18h26v53H34zm0-9h26M31 71h32M47 9v9m-9 54h19v11H38zm22-23c32 0 35 10 35 37" />
            <circle cx={94.6} cy={99.7} r={13.6} />
            <path d="M95 128v-14" />
            <path d="M36 110h23" />
            <path d="M47 129v-19m-16 19h77" />
        </svg>
    );
}
