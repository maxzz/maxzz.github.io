import { HTMLAttributes, SVGProps } from "react";

export function IconTailwind({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg stroke="currentColor" fill="none" strokeLinejoin="round" viewBox="0 0 15 15" {...rest}>
            {title && <title>{title}</title>}
            <path d="M7.5 3C5.63 3 4.47 4 4 6c.7-1 1.52-1.38 2.45-1.13.53.15.91.56 1.33 1.02.7.75 1.49 1.61 3.22 1.61 1.87 0 3.03-1 3.5-3-.7 1-1.52 1.38-2.45 1.13-.53-.15-.91-.56-1.33-1.02C10.02 3.86 9.23 3 7.5 3ZM4 7.5c-1.87 0-3.03 1-3.5 3 .7-1 1.52-1.38 2.45-1.13.53.15.91.56 1.33 1.02.7.75 1.48 1.61 3.22 1.61 1.87 0 3.03-1 3.5-3-.7 1-1.52 1.38-2.45 1.13-.53-.15-.91-.56-1.33-1.02C6.52 8.36 5.74 7.5 4 7.5Z" />
        </svg>
    );
}
