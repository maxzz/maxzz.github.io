import { type HTMLAttributes, type SVGProps } from "react";

export function IconLinked({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            {/* <rect strokeDasharray={'45'} strokeDashoffset={0} x="4" y="7" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="" className="stroke-blue-500" /> */}

            {/* <rect strokeDasharray={'45'} strokeDashoffset={0} x="0" y="7" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="rotate(-45) translate(8 0)" className="origin-center stroke-red-500" /> */}
            {/* <rect strokeDasharray={'45'} strokeDashoffset={0} x="4" y="7" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="rotate(-45 10 13)" className="stroke-green-500" /> */}
            {/* <rect strokeDasharray={'45'} strokeDashoffset={0} x="4" y="7" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="translate(1, 0) rotate(-45 10 13)" className="stroke-green-500" /> */}
            {/* <rect strokeDasharray={'45'} strokeDashoffset={0} x="4" y="7" width="12" height="12" rx="2.62" ry="2.62" transform="translate(0, 0) rotate(-45)" className="origin-center stroke-red-500" /> */}
            <rect strokeDasharray={'45'} strokeDashoffset={0} x="3.7" y="7" width="12" height="12" rx="2.62" ry="2.62" transform="translate(0, 0) rotate(-45 9.7 13)" className="stroke-green-500" />
            <rect strokeDasharray={'45'} strokeDashoffset={0} x="4" y="7" width="12" height="12" rx="2.62" ry="2.62" transform="translate(5, 0) rotate(-45 10 13)" className="stroke-green-500" />
            {/* <rect strokeDasharray={'45'} strokeDashoffset={0} x="8.38" y="5.78" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="rotate(-45 14.6 12)" /> */}
        </svg>
    );
}
