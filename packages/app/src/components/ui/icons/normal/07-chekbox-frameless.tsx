import { HTMLAttributes, SVGProps } from "react";

export function IconCheckFrameless({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="m3.1 12 5.94 5.94L20.9 6.06" />
        </svg>
    );
}
