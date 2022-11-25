import { HTMLAttributes, SVGAttributes, SVGProps } from "react";
import { classNames } from "@/utils/classnames";

function DefNavIcons() {
    return (<>
        <symbol id="icon-tv" viewBox="0 0 24 24">
            <path d="m11.05 14.5l4.15-2.65q.225-.15.338-.375q.112-.225.112-.475q0-.25-.112-.475q-.113-.225-.338-.375L11.05 7.5q-.5-.325-1.025-.05q-.525.275-.525.875v5.35q0 .6.525.875t1.025-.05ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm-5-4h16V5H4v12Zm0 0V5v12Z" />
        </symbol>

        <symbol id="icon-github" viewBox="0 0 1024 1024">
            <path d="M512 76a447 447 0 00-148 870c23 6 20-11 20-22v-78c-136 16-141-74-151-89-18-31-61-39-48-54 30-16 62 4 98 58 27 39 78 32 104 26 6-24 18-45 35-61-141-25-199-111-199-213 0-49 16-95 48-132-20-60 2-112 5-120 58-5 119 42 123 46a435 435 0 01226 0c12-9 68-49 122-44 3 8 25 58 5 118 33 37 49 83 49 132 0 103-59 189-200 213a128 128 0 0138 91v113c1 9 0 18 15 18A448 448 0 00512 76z" />
        </symbol>

        <symbol id="icon-hard-drive" viewBox="0 0 20 20">
            <path d="M14.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2.24 10.84A2.94 2.94 0 0 0 2 12v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2c0-.38-.06-.77-.19-1.14a54.84 54.84 0 0 0-2.45-5.77A1.96 1.96 0 0 0 13.59 4H6.5a2 2 0 0 0-1.84 1.21l-2.41 5.63ZM6.49 5h7.1c.38 0 .71.2.87.53.47.95 1.27 2.65 1.99 4.52A2.01 2.01 0 0 0 16 10H4c-.11 0-.22 0-.32.03L5.57 5.6A1 1 0 0 1 6.49 5ZM17 14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2Z" />
        </symbol>
    </>);
}

function DefApps() {
    return (<>
        {/* use-gesture */}
        <symbol id="icon-manual-mode" viewBox="0 0 24 24">
            <path d="M22.52 12.93c-.45-1.22-2.45-.96-3.97.02-.61.4-1.13.65-2.59.95-.64 0-.78-.68-.66-1.35l1.47-8.19c.42-2.08-2.14-2.84-2.65-.7l-1.27 7.12c-.64 1.78-.88 0-.88 0l-.35-7.67c0-2.78-2.73-2.95-2.73 0l.32 7.01c.14 2.77-.52 1.21-.52.99L7.4 4.87c-.62-2.63-3.07-1.95-2.63.44l1.19 5.56c.2 1.29-.81.68-.99.37L3.8 8.55c-.97-2.05-3.05-1.23-2.38.8l1.95 4.98c.19.54.33 1.09.42 1.66 0 1.4.91 4.26 1.65 5.01a6.87 6.87 0 0 0 9.73 0c1.8-2.02 2.66-2.87 3.37-4.42 0 0 1.82-1.53 4.08-2.81.2-.12-.11-.86-.11-.86Z" />
        </symbol>

        {/* stitches */}
        <symbol id="icon-stitches" viewBox="0 0 35 35">
            <circle cx="17.5" cy="17.5" r="14.5" stroke="currentColor" stroke-width="2" />
            <path d="m12.82 31.32 19.05-11" stroke="currentColor" />
            <path d="m3.32 14.87 19.05-11" stroke="currentColor" />
            <path d="m8.65 29.1 17.32-10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="m9.22 16.08 17.32-10" stroke="currentColor" stroke-linecap="round" />
            <path d="m13.23 14.23 9.28 6.88" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="m16.7 12.23 9.27 6.88" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="m9.22 16.08 9.83 7.03" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>

        {/* react-spring */}
        <symbol id="icon-react-spring" viewBox="0 0 24 24">
            <path fill="#ccc" d="M0 0h24v24H0z" />
            <circle cx="11.27" cy="12.25" r="6.05" fill="#b3b3b3" />
            <path d="M5.91 20.03C.2 21.9.76 16.87 3.32 13.32c-4.45.36-1.28-5.24.14-7.1-.11-.24-.47-.43-.25-.72 1.62.27 5.76-6.42 6.36-3.95-.98 2.73-3.93 3.75-5.6 5.77-1.19 1.62-3.63 6.09.2 4.69.5-.38.84-1.06 1.34-1.5l-.18 1.05a27.77 27.77 0 0 0 10.82-8.74l-.09-.16c-2.34 1.08-3.93 3.58-6.67 3.6 1.9-2.8 11.76-8.68 6.41-.96-2.96 3.58-6.94 5.56-10.77 7.79-1.47 1.73-4.54 7.42.02 5.91 1.11-.14 1.83-.75 2.31-1.83 3.02 1.44 11.9-6.71 13.76-9.52-1.65.3-2.97 1.3-4.36 2.19l-.59-1.16c1.35-1 6.5-4.21 5.96-.47-3.21 5.13-8.79 8.56-14.05 10.98-3.65 3.85 3.39 3.2 4.53.79 11.78-14.4 15.43-6.53.75 1.66l.39.45a.96.96 0 0 1-1.32.24c-2.29.23-7.33 2.34-6.52-2.3Zm15.38-6.4a35.15 35.15 0 0 0-6.7 5.91 21.86 21.86 0 0 0 6.7-5.91Z" />
        </symbol>

    </>);
}

export function UISymbolDefs() {
    return (
        <svg id="svgfont" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
        >
            <defs>
                {DefNavIcons()}
                {DefApps()}
            </defs>
        </svg>
    );
}

// DefApps

export function IconManualMode({ title, className, ...rest }: HTMLAttributes<SVGSVGElement> & SVGAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[.6]", className)} {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-manual-mode" /> {/* one hand */}
        </svg>
    );
}

export function IconStitches({ title, className, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current", className)} {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-stitches" />
        </svg>
    );
}

export function IconReactSpring({ title, className, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current", className)} {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-react-spring" />
        </svg>
    );
}

// DefNavIcons

export function IconTv({ title, className, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-current", className)} {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-tv" />
        </svg>
    );
}

export function IconGithubLogo({ title, className, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-current", className)} {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-github" />
        </svg>
    );
}

export function IconHardDrive({ title, className, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-current", className)} {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-hard-drive" />
        </svg>
    );
}
