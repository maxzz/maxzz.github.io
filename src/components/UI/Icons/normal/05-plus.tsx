import { HTMLAttributes, SVGProps } from "react";

{/* <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <defs>
    <style>
      .cls-1{fill:none;stroke:red;stroke-miterlimit:10;stroke-width:1.13px}
    </style>
  </defs>
  <path fill="#999" d="M0 0h24v24H0z"/>
  <rect x="3.19" y="5.78" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="rotate(-45 9.4 12)"/>
  <rect x="8.38" y="5.78" width="12.43" height="12.43" rx="2.62" ry="2.62" transform="rotate(-45 14.6 12)"/>
</svg> */}

export function IconImagePlus({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M19 10a1 1 0 0 0-1 1v3.38l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.71l-2.48-2.49a2.79 2.79 0 0 0-3.93 0L4 12.61V7a1 1 0 0 1 1-1h8a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12.22A2.79 2.79 0 0 0 4.78 22h12.44a2.88 2.88 0 0 0 .8-.12a2.74 2.74 0 0 0 2-2.65V11A1 1 0 0 0 19 10zM5 20a1 1 0 0 1-1-1v-3.57l2.89-2.89a.78.78 0 0 1 1.1 0L15.46 20zm13-1a1 1 0 0 1-.18.54L13.3 15l.71-.7a.77.77 0 0 1 1.1 0L18 17.21zm3-15h-1V3a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 0 0 0-2z" />
        </svg>
    );
}
