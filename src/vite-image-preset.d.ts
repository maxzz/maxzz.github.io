/// <reference types="vite/client" />

// images
declare module '*&srcset' {
    const src: string;
    export default src;
}

declare module '*?preset=hd' {
    const src: import('vite-plugin-image-presets').ImageAttrs[];
    export default src;
}

declare module '*?preset=full' {
    const src: import('vite-plugin-image-presets').ImageAttrs[];
    export default src;
}

declare module '*?preset=round' {
    const src: import('vite-plugin-image-presets').ImageAttrs[];
    export default src;
}

declare module '*?preset=thumbnail' {
    const src: import('vite-plugin-image-presets').ImageAttrs[];
    export default src;
}
