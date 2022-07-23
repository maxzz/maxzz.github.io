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

export function IconReact({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="m19.1 12.38-.36-.4.26-.3c1.6-1.8 2.28-3.6 1.66-4.7-.6-1.04-2.4-1.35-4.64-.91l-.66.14-.13-.43C14.47 3.5 13.23 2 11.98 2c-1.2 0-2.37 1.4-3.1 3.56q-.12.32-.21.64l-.44-.1c-2.37-.48-4.27-.16-4.9.93-.6 1.04.03 2.75 1.53 4.47l.46.5-.53.57c-1.46 1.7-2.05 3.38-1.45 4.41.62 1.08 2.5 1.43 4.78.98l.55-.12q.1.35.23.7C9.63 20.63 10.8 22 12 22c1.23 0 2.47-1.45 3.23-3.66l.17-.54q.35.09.71.16c2.2.41 3.95.09 4.55-.95.62-1.08-.02-2.88-1.55-4.63ZM4.08 7.45c.39-.67 1.94-.93 3.99-.51l.4.09a20.46 20.46 0 0 0-.43 2.68 20.89 20.89 0 0 0-2.1 1.69l-.43-.47C4.22 9.46 3.7 8.09 4.07 7.46Zm3.89 5.73A19.2 19.2 0 0 1 6.54 12c.43-.4.9-.8 1.42-1.18q-.03.6-.03 1.18 0 .6.03 1.18Zm0 3.94a7.24 7.24 0 0 1-2.64.1 1.77 1.77 0 0 1-1.24-.66c-.37-.63.1-1.98 1.36-3.43q.24-.28.49-.53a20.49 20.49 0 0 0 2.1 1.7 20.8 20.8 0 0 0 .43 2.7l-.5.12Zm7.1-8.04q-.5-.32-1.02-.61-.5-.3-1.03-.56a18.7 18.7 0 0 1 1.74-.64 18.22 18.22 0 0 1 .3 1.81ZM9.68 5.83c.64-1.85 1.58-2.98 2.3-2.98.78 0 1.78 1.22 2.44 3.2l.12.4A20.48 20.48 0 0 0 12 7.4a20.06 20.06 0 0 0-2.52-.98l.19-.6Zm-.4 1.43a18.3 18.3 0 0 1 1.73.64q-1.05.54-2.05 1.18c.08-.64.19-1.25.32-1.82Zm-.32 7.66q.5.32 1.01.61.52.3 1.06.58a18.2 18.2 0 0 1-1.74.66 19.14 19.14 0 0 1-.33-1.85Zm5.46 3.15a7.24 7.24 0 0 1-1.24 2.33 1.77 1.77 0 0 1-1.19.75c-.73 0-1.65-1.09-2.29-2.9l-.2-.65a20.1 20.1 0 0 0 2.53-1 20.8 20.8 0 0 0 2.54.97l-.15.5Zm.36-1.33a19.27 19.27 0 0 1-1.76-.64l1.02-.57q.53-.3 1.04-.63a18.15 18.15 0 0 1-.3 1.84Zm.45-4.74q0 .9-.06 1.82a25.4 25.4 0 0 1-3.15 1.83q-.83-.4-1.62-.86-.8-.45-1.55-.97-.07-.9-.07-1.82 0-.91.07-1.82a24.17 24.17 0 0 1 3.16-1.82q.82.4 1.6.85.8.45 1.55.96.07.91.07 1.83Zm.95-5.1c1.93-.37 3.37-.12 3.74.51.38.67-.17 2.15-1.56 3.7l-.23.27a20.06 20.06 0 0 0-2.15-1.7 20.04 20.04 0 0 0-.4-2.64l.6-.14Zm-.13 3.89a18.16 18.16 0 0 1 1.47 1.19 18.12 18.12 0 0 1-1.46 1.2l.02-1.18q0-.6-.03-1.21Zm3.87 5.79c-.36.63-1.76.9-3.65.54q-.32-.06-.66-.15a20.07 20.07 0 0 0 .38-2.68 19.94 19.94 0 0 0 2.14-1.72l.34.37a7.23 7.23 0 0 1 1.4 2.24 1.77 1.77 0 0 1 .05 1.4Zm-8.82-6.14a1.79 1.79 0 1 0 2.44.65 1.79 1.79 0 0 0-2.44-.65Z" />
        </svg>
    );
}

export function IconJotai({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 327.9 343" {...rest}>
            {title && <title>{title}</title>}
            <path d="M292.2 126.7c.6 11-1.2 27.1-16.5 20.3-9.6-6.7-4.2-20.8-5.4-30.9-.4-13.8 21.4-15.3 21.6-.4v11zM368.9 126.6c4 26-18 28-21.5 12.3 0-8.3 0-16.6.2-25 .8-9.9 16.3-12 19.8-3.2 2.2 5 1.7 10.6 1.6 15.9z" transform="translate(-139.2 -25.5)" />
            <path d="M289.5 203.1a32 32 0 01-30-31.6c39-1 78.2-.1 117.2-.4 4.8-.4 2 4.9 2.1 7.7a32.8 32.8 0 01-29.1 24.4" transform="translate(-139.2 -25.5)" />
            <path d="M347.5 204.3c-.1-6.5-.5-13-.3-19.5 0-3.4 0-3.4-3.3-3.4h-48.6c-3.3 0-3.6.2-3.6 3.5.2 12.2-.7 24.5.6 36.7 1.1 28.7 42.3 35 52.8 8.8 3.3-8.3 1.8-17.4 2.4-26z" transform="translate(-139.2 -25.5)" />
            <path fill="none" stroke="currentColor" strokeWidth="17" transform="translate(-139.2 -25.5)"
                d="M281 26a177.8 177.8 0 0156.5 8.8 108 108 0 0172.1 82.5c2.3 9.6 2.2 19 2 28v5.2c30.5 4 55.2 32 55 63.4v17.7c-.7 8.9-6.9 15-15.1 15a16 16 0 01-12.1-5.6 16.3 16.3 0 01-3.9-12.9 9.2 9.2 0 00-.2-2.8 70.2 70.2 0 00-7.5-.5c-12.3 0-14.7 4.1-15.4 6-13.5 58.5-43.3 97.2-88.6 115a135.5 135.5 0 01-53.1 10.6 147 147 0 01-109.2-48.8 188.7 188.7 0 01-12.5-17.7c-8.7-13.8-11-21.7-8-28a12.3 12.3 0 0111.4-7.1 20 20 0 016.6 1.2l2.2.8 1.6 1.6 6 6.2c6.1 6.8 12 13.2 19.5 15.2h.2l.2.1a33.2 33.2 0 0010 1.5c10.2 0 20.9-4.8 28.5-12.8 7.3-7.6 11-17 10.6-26.7v-.7c.2-4.8-.4-13.2-6.3-15.1a36 36 0 00-10.7-1.2h-5.7l-6.4.2-4.8-.1v.6l-.3.8-.2 2.2c-.3 3.8-1.2 15.5-12.7 17.6h-.7a20 20 0 01-2.2.2c-6.4 0-11.7-3.3-14-8.8l-.2-.7-.2-.6c-2.3-8.5-1.5-17-.8-24.5l.6-7.6v-.7l.2-.6a65.3 65.3 0 0153.3-52.3v-.8c-.6-27.4-1.3-55.7 21-78.4l-1.3-1.4c-4.1-3.8-8.7-8.1-12.2-12-3.3-3.6-10-11-6.1-18.8A16 16 0 01242.5 29a268.3 268.3 0 0138.5-3"
            />
        </svg>
    );
}

export function IconTailwind({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg stroke="currentColor" fill="none" strokeLinejoin="round" viewBox="0 0 15 15" {...rest}>
            {title && <title>{title}</title>}
            <path d="M7.5 3C5.63 3 4.47 4 4 6c.7-1 1.52-1.38 2.45-1.13.53.15.91.56 1.33 1.02.7.75 1.49 1.61 3.22 1.61 1.87 0 3.03-1 3.5-3-.7 1-1.52 1.38-2.45 1.13-.53-.15-.91-.56-1.33-1.02C10.02 3.86 9.23 3 7.5 3ZM4 7.5c-1.87 0-3.03 1-3.5 3 .7-1 1.52-1.38 2.45-1.13.53.15.91.56 1.33 1.02.7.75 1.48 1.61 3.22 1.61 1.87 0 3.03-1 3.5-3-.7 1-1.52 1.38-2.45 1.13-.53-.15-.91-.56-1.33-1.02C6.52 8.36 5.74 7.5 4 7.5Z" />
        </svg>
    );
}

export function IconVue({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M22.93 3.26A.5.5 0 0 0 22.5 3h-4.99l-4-.03h-.01a.5.5 0 0 0-.43.25L12 5.02l-1.07-1.78A.5.5 0 0 0 10.5 3l-4-.03H6.5a.48.48 0 0 0-.1.03H1.5a.5.5 0 0 0-.43.75l10.5 18a.5.5 0 0 0 .86 0l10.5-18a.5.5 0 0 0 0-.5zM10.22 4l1.35 2.26a.5.5 0 0 0 .43.24.5.5 0 0 0 .43-.24l1.35-2.28 2.83.02-3 4.91L12 11.54 7.4 3.98l2.82.02zM12 20.5 2.37 4h3.85l5.35 8.76a.5.5 0 0 0 .15.14l.04.04a.5.5 0 0 0 .67-.18L17.78 4h3.85L12 20.5z" />
        </svg>
    );
}

export function IconNpm({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M4 10v4h2v-3h1v3h1v-4H4m5 0v5h2v-1h2v-4H9m3 1v2h-1v-2h1m2-1v4h2v-3h1v3h1v-3h1v3h1v-4h-6M3 9h18v6h-9v1H8v-1H3V9Z" />
        </svg>
    );
}

export function IconJs({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 32 32" {...rest}>
            {title && <title>{title}</title>}
            <path d="M18.77 19.7a3.73 3.73 0 0 0 3.38 2.08c1.42 0 2.32-.71 2.32-1.69 0-1.17-.93-1.59-2.49-2.27l-.85-.37c-2.47-1.05-4.11-2.37-4.11-5.15 0-2.57 1.95-4.52 5-4.52a5.06 5.06 0 0 1 4.88 2.74l-2.67 1.71a2.33 2.33 0 0 0-2.2-1.47 1.49 1.49 0 0 0-1.63 1.47c0 1.03.63 1.44 2.1 2.08l.85.36c2.91 1.25 4.55 2.52 4.55 5.38 0 3.08-2.42 4.77-5.67 4.77a6.58 6.58 0 0 1-6.23-3.5ZM6.7 20c.53.95 1.02 1.76 2.2 1.76 1.12 0 1.83-.44 1.83-2.15V7.98h3.42v11.68c0 3.54-2.08 5.15-5.1 5.15A5.31 5.31 0 0 1 3.9 21.7Z" />
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
            <path d="M47 129v-19m-16 19h77" />
        </svg>
    );
}

export function IconList({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M8 9q-.42 0-.71-.29T7 8t.29-.71Q7.58 7 8 7h12q.42 0 .71.29T21 8t-.29.71Q20.42 9 20 9Zm0 4q-.42 0-.71-.29T7 12t.29-.71Q7.58 11 8 11h12q.42 0 .71.29T21 12t-.29.71q-.29.29-.71.29Zm0 4q-.42 0-.71-.29T7 16t.29-.71Q7.58 15 8 15h12q.42 0 .71.29T21 16t-.29.71q-.29.29-.71.29ZM4 9q-.42 0-.71-.29T3 8t.29-.71Q3.58 7 4 7t.71.29Q5 7.58 5 8t-.29.71Q4.42 9 4 9Zm0 4q-.42 0-.71-.29T3 12t.29-.71Q3.58 11 4 11t.71.29q.29.29.29.71t-.29.71Q4.42 13 4 13Zm0 4q-.42 0-.71-.29T3 16t.29-.71Q3.58 15 4 15t.71.29q.29.29.29.71t-.29.71Q4.42 17 4 17Z" />
        </svg>
    );
}

export function IconGrid({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" viewBox="0 0 512 512" {...rest}>
            {title && <title>{title}</title>}
            <rect width="176" height="176" x="48" y="48" rx="20" ry="20" />
            <rect width="176" height="176" x="288" y="48" rx="20" ry="20" />
            <rect width="176" height="176" x="48" y="288" rx="20" ry="20" />
            <rect width="176" height="176" x="288" y="288" rx="20" ry="20" />
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
