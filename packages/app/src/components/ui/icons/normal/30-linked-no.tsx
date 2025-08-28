import { HTMLAttributes, SVGProps } from "react";

export function IconLinkedNo({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeDasharray={'32'} strokeDashoffset={0} d="M15.34 6.35V4.74a2.8 2.8 0 0 0-2.81-2.81H4.82a2.8 2.8 0 0 0-2.81 2.81v7.71a2.8 2.8 0 0 0 2.81 2.81h1.71" />
            <path strokeDasharray={'32'} strokeDashoffset={0} d="M17.42 8.75h1.76a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-7.71a2.8 2.8 0 0 1-2.81-2.81v-.81" />
        </svg>
    );
}
