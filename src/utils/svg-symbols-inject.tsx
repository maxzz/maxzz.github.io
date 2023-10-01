import { ReactNode } from "react";

export function UISymbolDefsInject({ children }: { children: ReactNode; }) {
    return (
        <svg
            id="svgfont" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
        >
            <defs>
                {children}
            </defs>
        </svg>
    );
}
