import { HTMLAttributes, SVGProps } from "react";

export function IconJs({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 32 32" {...rest}>
            {title && <title>{title}</title>}
            <path d="M18.77 19.7a3.73 3.73 0 0 0 3.38 2.08c1.42 0 2.32-.71 2.32-1.69 0-1.17-.93-1.59-2.49-2.27l-.85-.37c-2.47-1.05-4.11-2.37-4.11-5.15 0-2.57 1.95-4.52 5-4.52a5.06 5.06 0 0 1 4.88 2.74l-2.67 1.71a2.33 2.33 0 0 0-2.2-1.47 1.49 1.49 0 0 0-1.63 1.47c0 1.03.63 1.44 2.1 2.08l.85.36c2.91 1.25 4.55 2.52 4.55 5.38 0 3.08-2.42 4.77-5.67 4.77a6.58 6.58 0 0 1-6.23-3.5ZM6.7 20c.53.95 1.02 1.76 2.2 1.76 1.12 0 1.83-.44 1.83-2.15V7.98h3.42v11.68c0 3.54-2.08 5.15-5.1 5.15A5.31 5.31 0 0 1 3.9 21.7Z" />
        </svg>
    );
}
