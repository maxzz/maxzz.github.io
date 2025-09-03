import { type HTMLAttributes, type SVGProps } from "react";

export function IconLinkedOrg({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeDasharray={'44'} strokeDashoffset={0} d="M6.53 15.25H4.82a2.8 2.8 0 0 1-2.81-2.81V4.73a2.8 2.8 0 0 1 2.81-2.81h7.71a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-1.74" />
            <path strokeDasharray={'44'} strokeDashoffset={0} d="M17.47 8.75h1.71a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-7.71a2.8 2.8 0 0 1-2.81-2.81v-7.71a2.8 2.8 0 0 1 2.81-2.81h1.74" />
        </svg>
    );
}
