import { HTMLAttributes, SVGProps } from "react";

export function IconStackNpm({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M2.22 8.94v4.89h2.44v-3.67h1.22v3.67H7.1V8.94H2.22m6.11 0v6.11h2.44v-1.22h2.44V8.94H8.32m3.67 1.22v2.44h-1.22v-2.44h1.22m2.44-1.22v4.89h2.44v-3.67h1.22v3.67h1.22v-3.67h1.22v3.67h1.22V8.94h-7.33M1 7.72h22v7.33H12v1.22H7.11v-1.22H1V7.72Z" />
        </svg>
    );
}
