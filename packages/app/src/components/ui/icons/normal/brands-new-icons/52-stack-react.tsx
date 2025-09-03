import { type HTMLAttributes, type SVGProps } from "react";

export function IconStackReact({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <ellipse cx="12" cy="12" rx="3.9" ry="10.5" />
            <ellipse cx="12" cy="12" rx="10.5" ry="3.9" transform="rotate(-30 12 12)" />
            <ellipse cx="12" cy="12" rx="3.9" ry="10.5" transform="rotate(-60 12 12)" />
            <circle cx="11.96" cy="11.93" r="1.59" />
        </svg>
    );
}
