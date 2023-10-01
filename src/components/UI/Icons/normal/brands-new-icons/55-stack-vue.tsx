import { HTMLAttributes, SVGProps } from "react";

export function IconStackVue({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="m9.51 3.08 1.88 3.17c.13.21.35.34.6.33.24 0 .47-.13.6-.33l1.88-3.17h3.95l-4.18 6.87L12 13.62 5.58 3.08h3.93Z" />
            <path d="M18.42 3.08h3.99L12 20.92 1.59 3.08h3.99" />
        </svg>
    );
}
