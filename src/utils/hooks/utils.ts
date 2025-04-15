// empty function
export const noop = () => { };

// event listeners

export function on<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null, ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
    if (obj?.addEventListener) {
        obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
    }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null, ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
    if (obj?.removeEventListener) {
        obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
    }
}

// browser utils

export const isBrowser = typeof window !== 'undefined';

export const isNavigator = typeof navigator !== 'undefined';
