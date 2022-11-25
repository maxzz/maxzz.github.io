import { HTMLAttributes, SVGAttributes, SVGProps } from "react";

function DefAppTypes() {
    return (<>
        {/* hard drive */}
        <symbol id="icon-hard-drive" viewBox="0 0 20 20">
            <path d="M14.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2.24 10.84A2.94 2.94 0 0 0 2 12v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2c0-.38-.06-.77-.19-1.14a54.84 54.84 0 0 0-2.45-5.77A1.96 1.96 0 0 0 13.59 4H6.5a2 2 0 0 0-1.84 1.21l-2.41 5.63ZM6.49 5h7.1c.38 0 .71.2.87.53.47.95 1.27 2.65 1.99 4.52A2.01 2.01 0 0 0 16 10H4c-.11 0-.22 0-.32.03L5.57 5.6A1 1 0 0 1 6.49 5ZM17 14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2Z" />
        </symbol>

        {/* one hand */}
        <symbol id="icon-manual-mode" viewBox="0 0 24 24">
            <path d="M22.52 12.93c-.45-1.22-2.45-.96-3.97.02-.61.4-1.13.65-2.59.95-.64 0-.78-.68-.66-1.35l1.47-8.19c.42-2.08-2.14-2.84-2.65-.7l-1.27 7.12c-.64 1.78-.88 0-.88 0l-.35-7.67c0-2.78-2.73-2.95-2.73 0l.32 7.01c.14 2.77-.52 1.21-.52.99L7.4 4.87c-.62-2.63-3.07-1.95-2.63.44l1.19 5.56c.2 1.29-.81.68-.99.37L3.8 8.55c-.97-2.05-3.05-1.23-2.38.8l1.95 4.98c.19.54.33 1.09.42 1.66 0 1.4.91 4.26 1.65 5.01a6.87 6.87 0 0 0 9.73 0c1.8-2.02 2.66-2.87 3.37-4.42 0 0 1.82-1.53 4.08-2.81.2-.12-.11-.86-.11-.86Z" />
        </symbol>
    </>);
}

export function UISymbolDefs() {
    return (
        <svg id="svgfont" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
        >
            <defs>
                {DefAppTypes()}
            </defs>
        </svg>
    );
}

export function IconHardDrive({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-hard-drive" />
        </svg>
    );
}

export function IconManualMode({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGAttributes<SVGSVGElement>) {
    return (
        <svg fill="none" stroke="currentColor" strokeWidth=".6" {...rest}>
            {title && <title>{title}</title>}
            <use xlinkHref="#icon-manual-mode" />
        </svg>
    );
}
