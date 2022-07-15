import { classNames } from "@/utils/classnames";
import { HTMLAttributes, SVGProps } from "react";

export function IconAppLogo({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 14 14" {...rest}>
            {title && <title>{title}</title>}
            <path d="M7.5,6.4L7.68,1.14L12.73,6.4L7.79,8.41L10.73,6.4L7.5,12.9L4.27,6.4L7.21,8.41L2.27,6.4L7.32,1.14z" />
        </svg>
    );
}

export function IconGithubLogo({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 1024 1024" {...rest}>
            {title && <title>{title}</title>}
            <path d="M512 76a447 447 0 00-148 870c23 6 20-11 20-22v-78c-136 16-141-74-151-89-18-31-61-39-48-54 30-16 62 4 98 58 27 39 78 32 104 26 6-24 18-45 35-61-141-25-199-111-199-213 0-49 16-95 48-132-20-60 2-112 5-120 58-5 119 42 123 46a435 435 0 01226 0c12-9 68-49 122-44 3 8 25 58 5 118 33 37 49 83 49 132 0 103-59 189-200 213a128 128 0 0138 91v113c1 9 0 18 15 18A448 448 0 00512 76z" />
        </svg>
    );
}

function IconLinkedNo({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeDasharray={'32'} strokeDashoffset={0} d="M15.34 6.35V4.74a2.8 2.8 0 0 0-2.81-2.81H4.82a2.8 2.8 0 0 0-2.81 2.81v7.71a2.8 2.8 0 0 0 2.81 2.81h1.71" />
            <path strokeDasharray={'32'} strokeDashoffset={0} d="M17.42 8.75h1.76a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-7.71a2.8 2.8 0 0 1-2.81-2.81v-.81" />
        </svg>
    );
}

function IconLinkedOrg({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeDasharray={'44'} strokeDashoffset={0} d="M6.53 15.25H4.82a2.8 2.8 0 0 1-2.81-2.81V4.73a2.8 2.8 0 0 1 2.81-2.81h7.71a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-1.74" />
            <path strokeDasharray={'44'} strokeDashoffset={0} d="M17.47 8.75h1.71a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-7.71a2.8 2.8 0 0 1-2.81-2.81v-7.71a2.8 2.8 0 0 1 2.81-2.81h1.74" />
        </svg>
    );
}

function IconLinked({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
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

function IconLinkedRotated({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeDasharray={'44'} strokeDashoffset={0} d="M6.53 15.25H4.82a2.8 2.8 0 0 1-2.81-2.81V4.73a2.8 2.8 0 0 1 2.81-2.81h7.71a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-1.74" />
            <path strokeDasharray={'44'} strokeDashoffset={0} d="M17.47 8.75h1.71a2.8 2.8 0 0 1 2.81 2.81v7.71a2.8 2.8 0 0 1-2.81 2.81h-7.71a2.8 2.8 0 0 1-2.81-2.81v-7.71a2.8 2.8 0 0 1 2.81-2.81h1.74" />
        </svg>
    );
}

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

export function IconImages({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 512 512" {...rest}>
            {title && <title>{title}</title>}
            <path d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16" />
            <rect width="400" height="336" x="96" y="128" rx="45.99" ry="45.99" />
            <ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" />
            <path d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91" />
        </svg>
    );
}

export function IconTrash({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 16 16" {...rest}>
            {title && <title>{title}</title>}
            <path d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" />
        </svg>
    );
}

export function IconSunnyvale({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...rest}>
            {title && <title>{title}</title>}
            {/* <path fill="#e3e3e35e" d="M20 8l-8 14.2L2.8 5.8h4.4C8 .5 16 .5 16.8 5.8h4.4L20 8z" /> */}
            {/* <path fill="#fcc10a" d="M20.3 6.3L12 21.1 3.7 6.3h4C8 1 15.8 1 16.2 6.3z" /> */}
            <path d="M12 10.3c-5.6-.2-4.7-8.4.8-7.4 4.3.8 3.6 7.5-.8 7.4zM12.1 10.9h.5l.6 6a10.8 10.8 0 01-.8 1.1c0-2.4-.2-4.8-.3-7.1zM11.6 18l-.7-1.1c0-1.6.3-5.3.5-6a4.5 4.5 0 00.5 0c0 2.3-.3 4.7-.3 7.1zM14.8 14.2l-1 1.4-1-4.8a2.5 2.5 0 00.8-.2l1.2 3.6zM11 10.8c0 .9-.7 4-1 4.7a12.4 12.4 0 01-.8-1.3l1.1-3.6a7 7 0 00.8.2z" />
            <path d="M8 12.2L9.4 10l.8.5c-.1.2-1 1.8-1.4 2.9L8 12zM14.6 10l1.4 2.2-.8 1.2c-.4-1-1-2-1.3-3a4.3 4.3 0 00.7-.4zM5.3 7.9l-.6-1.1h3a3.7 3.7 0 000 .8l-2.4.3zM18.6 7.9c-.7-.2-1.6-.2-2.4-.3l.1-.8h3zM5.8 8.6L7.9 8a7.8 7.8 0 00.4.8l-1.7 1-.8-1.2zM17.4 9.8l-1.7-1L16 8l2.1.7-.8 1.2zM9.1 9.8l-1.5 1.7-.7-1 1.7-1.3.5.6zM14.8 9.8a8 8 0 00.6-.6l1.6 1.3a9.8 9.8 0 01-.6 1c-.6-.5-1-1.1-1.5-1.7z" />
        </svg>
    );
}

export function IconHardDrive({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 20 20" fill="currentColor" {...rest}>
            {title && <title>{title}</title>}
            <path d="M14.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2.24 10.84A2.94 2.94 0 0 0 2 12v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2c0-.38-.06-.77-.19-1.14a54.84 54.84 0 0 0-2.45-5.77A1.96 1.96 0 0 0 13.59 4H6.5a2 2 0 0 0-1.84 1.21l-2.41 5.63ZM6.49 5h7.1c.38 0 .71.2.87.53.47.95 1.27 2.65 1.99 4.52A2.01 2.01 0 0 0 16 10H4c-.11 0-.22 0-.32.03L5.57 5.6A1 1 0 0 1 6.49 5ZM17 14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2Z" />
        </svg>
    );
}

export function IconTv({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...rest}>
            {title && <title>{title}</title>}
            <path d="m11.05 14.5l4.15-2.65q.225-.15.338-.375q.112-.225.112-.475q0-.25-.112-.475q-.113-.225-.338-.375L11.05 7.5q-.5-.325-1.025-.05q-.525.275-.525.875v5.35q0 .6.525.875t1.025-.05ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm-5-4h16V5H4v12Zm0 0V5v12Z" />
        </svg>
    );
}

{/* <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <defs>
    <style>
      .cls-1{fill:none;stroke:red;stroke-miterlimit:10;stroke-width:1.13px}
    </style>
  </defs>
  <path fill="#999" d="M0 0h24v24H0z"/>
  <rect class="cls-1" x="3.19" y="5.78" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="rotate(-45 9.4 12)"/>
  <rect class="cls-1" x="8.38" y="5.78" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="rotate(-45 14.6 12)"/>
</svg> */}

export function IconImagePlus({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M19 10a1 1 0 0 0-1 1v3.38l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.71l-2.48-2.49a2.79 2.79 0 0 0-3.93 0L4 12.61V7a1 1 0 0 1 1-1h8a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12.22A2.79 2.79 0 0 0 4.78 22h12.44a2.88 2.88 0 0 0 .8-.12a2.74 2.74 0 0 0 2-2.65V11A1 1 0 0 0 19 10zM5 20a1 1 0 0 1-1-1v-3.57l2.89-2.89a.78.78 0 0 1 1.1 0L15.46 20zm13-1a1 1 0 0 1-.18.54L13.3 15l.71-.7a.77.77 0 0 1 1.1 0L18 17.21zm3-15h-1V3a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 0 0 0-2z" />
        </svg>
    );
}

export function IconDownload({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}

export function IconClipboard({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
    );
}

export function IconCross({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 20 20" {...rest}>
            {title && <title>{title}</title>}
            <path d="M4.3 4.3a1 1 0 0 1 1.4 0L10 8.58l4.3-4.3a1 1 0 1 1 1.4 1.42L11.42 10l4.3 4.3a1 1 0 0 1-1.42 1.4L10 11.42l-4.3 4.3a1 1 0 0 1-1.4-1.42L8.58 10l-4.3-4.3a1 1 0 0 1 0-1.4z" />
        </svg>
    );
}

export function IconCode({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 256 256" {...rest}>
            {title && <title>{title}</title>}
            <path d="M69.1 94.1 28.5 128l40.6 33.9a7.9 7.9 0 0 1 1.1 11.2A8.1 8.1 0 0 1 64 176a7.7 7.7 0 0 1-5.1-1.9l-48-40a7.9 7.9 0 0 1 0-12.2l48-40a8 8 0 1 1 10.2 12.2Zm176 27.8-48-40a8 8 0 0 0-10.2 12.2l40.6 33.9-40.6 33.9A8 8 0 0 0 192 176a7.7 7.7 0 0 0 5.1-1.9l48-40a7.9 7.9 0 0 0 0-12.2Zm-82.4-89.4a7.9 7.9 0 0 0-10.2 4.8l-64 176a7.9 7.9 0 0 0 4.8 10.2 8.6 8.6 0 0 0 2.7.5 7.9 7.9 0 0 0 7.5-5.3l64-176a7.9 7.9 0 0 0-4.8-10.2Z" />
        </svg>
    );
}

export function IconExperiments({ className, title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) { // microscope
    return (
        <svg viewBox="0 0 139 139" className={classNames("fill-transparent", className)} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} {...rest}>
            {title && <title>{title}</title>}
            <path d="M34 18h26v53H34zm0-9h26M31 71h32M47 9v9m-9 54h19v11H38zm22-23c32 0 35 10 35 37" />
            <circle cx={94.6} cy={99.7} r={13.6} />
            <path d="M95 128v-14" />
            <path d="M36 110h23" />
            <path className="cls-1" d="M47 129v-19m-16 19h77" />
        </svg>
    );
}
/*
export function UISymbolsDefs() {
    return (
        <svg
            id="svgfont"
            style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
        >
            <defs>

                <symbol id="icon-ch" viewBox="0 0 24 24">
                    <defs>
                        <clipPath id="cr-a">
                            <circle cx="12" cy="11.99" r="11.2" fill="none" />
                        </clipPath>
                    </defs>
                    <path d="M7.59 14.54 12 6.9h10a11.21 11.21 0 0 0-19.41-1v8.6Z" fill="#db4437" />
                    <path d="M16.41 14.54H7.59l-5-8.6a11.22 11.22 0 0 0 8.9 17.25l4.94-4.94Z" fill="#0f9d58" />
                    <path d="m12 6.9 4.41 7.64-4.94 8.65H12A11.21 11.21 0 0 0 22 6.9Z" fill="#ffcd40" />
                    <g clipPath="url(#cr-a)">
                        <circle cx="12" cy="11.99" r="5.09" fill="#f1f1f1" />
                        <circle cx="12" cy="11.99" r="4.07" fill="#4285f4" />
                    </g>
                </symbol>

            </defs>
        </svg>
    );
}

export function IconLogoCr(props: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    const { title, ...rest } = props;
    return (
        <svg {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-ch" />
        </svg>
    );
}
*/