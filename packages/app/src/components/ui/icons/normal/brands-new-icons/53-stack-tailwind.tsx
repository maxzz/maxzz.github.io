import { type HTMLAttributes, type SVGProps } from "react";

export function IconStackTailwind({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" strokeLinejoin="round" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M12 5.31c-2.78 0-4.51 1.49-5.21 4.46 1.04-1.49 2.26-2.05 3.64-1.68.79.22 1.35.83 1.98 1.52C13.45 10.73 14.63 12 17.2 12c2.78 0 4.51-1.49 5.21-4.46-1.04 1.49-2.26 2.05-3.64 1.68-.79-.22-1.35-.83-1.98-1.52-1.04-1.12-2.22-2.39-4.79-2.39ZM6.79 12c-2.78 0-4.51 1.49-5.21 4.46 1.04-1.49 2.26-2.05 3.64-1.68.79.22 1.35.83 1.98 1.52 1.04 1.12 2.2 2.39 4.79 2.39 2.78 0 4.51-1.49 5.21-4.46-1.04 1.49-2.26 2.05-3.64 1.68-.79-.22-1.35-.83-1.98-1.52C10.54 13.27 9.38 12 6.79 12Z" />
        </svg>
    );
}
