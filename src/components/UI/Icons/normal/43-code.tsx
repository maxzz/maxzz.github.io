import { HTMLAttributes, SVGProps } from "react";

export function IconCode({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 256 256" {...rest}>
            {title && <title>{title}</title>}
            <path d="M69.1 94.1 28.5 128l40.6 33.9a7.9 7.9 0 0 1 1.1 11.2A8.1 8.1 0 0 1 64 176a7.7 7.7 0 0 1-5.1-1.9l-48-40a7.9 7.9 0 0 1 0-12.2l48-40a8 8 0 1 1 10.2 12.2Zm176 27.8-48-40a8 8 0 0 0-10.2 12.2l40.6 33.9-40.6 33.9A8 8 0 0 0 192 176a7.7 7.7 0 0 0 5.1-1.9l48-40a7.9 7.9 0 0 0 0-12.2Zm-82.4-89.4a7.9 7.9 0 0 0-10.2 4.8l-64 176a7.9 7.9 0 0 0 4.8 10.2 8.6 8.6 0 0 0 2.7.5 7.9 7.9 0 0 0 7.5-5.3l64-176a7.9 7.9 0 0 0-4.8-10.2Z" />
        </svg>
    );
}
