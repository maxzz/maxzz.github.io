import { HTMLAttributes, SVGProps } from "react";

//TODO: icon to remove duplicates
// fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
export function IconImage({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 512 512" {...rest}>
            {title && <title>{title}</title>}
            <rect width="416" height="352" x="48" y="80" rx="48" ry="48" />
            <circle cx="336" cy="176" r="32" />
            <path d="m304 335.79l-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0 1 43.11-2L464 368" />
        </svg>
    );
}
