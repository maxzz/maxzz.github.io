import { HTMLAttributes, SVGProps } from "react";

export function IconStackJotai({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M9.71 1.54c5-.34 9.81 3.56 9.22 8.79 3.2.77 3.51 3.17 2.67 6.41-.21.82-.99 1.03-1.28.18-.26-.76-.19-1.28-.81-2.3s-1.27-.83-1.37.17c-.79 10.22-9.86 7.98-15.05 5.97-1.49-.58 2.88-.25 4.36-.96.5-.24.77-.44.84-.84A7.61 7.61 0 0 1 6.21 15c-.09-.36-.66-.53-1.07-.32-.86.44-.82 3.61-2 2.43-2.63-2.63-.24-6.76 2.75-6.76-.33-1.57-.49-4.97 1.68-6.73a9.03 9.03 0 0 0-2.14-1.23c-.19-.07-.18-.32.01-.36 2.28-.39 3.48-.48 4.28-.48" />
            <path d="m10.29 6.94.04 2.82" />
            <path d="M14.11 6.99v2.83" />
            <path d="M10.59 12.43H14" />
        </svg>
    );
}
