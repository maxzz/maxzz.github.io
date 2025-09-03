import { type HTMLAttributes, type SVGProps } from "react";

export function IconGrid({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" viewBox="0 0 512 512" {...rest}>
            {title && <title>{title}</title>}
            <rect width="176" height="176" x="48" y="48" rx="20" ry="20" />
            <rect width="176" height="176" x="288" y="48" rx="20" ry="20" />
            <rect width="176" height="176" x="48" y="288" rx="20" ry="20" />
            <rect width="176" height="176" x="288" y="288" rx="20" ry="20" />
        </svg>
    );
}
