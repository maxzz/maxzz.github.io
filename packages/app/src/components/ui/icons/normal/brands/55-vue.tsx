import { HTMLAttributes, SVGProps } from "react";

export function IconVue({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M22.93 3.26A.5.5 0 0 0 22.5 3h-4.99l-4-.03h-.01a.5.5 0 0 0-.43.25L12 5.02l-1.07-1.78A.5.5 0 0 0 10.5 3l-4-.03H6.5a.48.48 0 0 0-.1.03H1.5a.5.5 0 0 0-.43.75l10.5 18a.5.5 0 0 0 .86 0l10.5-18a.5.5 0 0 0 0-.5zM10.22 4l1.35 2.26a.5.5 0 0 0 .43.24.5.5 0 0 0 .43-.24l1.35-2.28 2.83.02-3 4.91L12 11.54 7.4 3.98l2.82.02zM12 20.5 2.37 4h3.85l5.35 8.76a.5.5 0 0 0 .15.14l.04.04a.5.5 0 0 0 .67-.18L17.78 4h3.85L12 20.5z" />
        </svg>
    );
}
