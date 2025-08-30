import { HTMLAttributes, SVGProps } from "react";

export function IconStackNpmLines({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M6.05 16.7V7.55H1.59v9.15" />
            <path d="M8.37 15.81h4.98V7.55H8.37v11.52" />
            <path d="M22.41 16.7V7.55h-6.73v9.15" />
            <path d="M19.05 7.67v9.03" />
        </svg>
    );
}
