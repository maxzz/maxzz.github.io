import type { PluginAPI } from 'tailwindcss/plugin';

/** Variants for styling range input thumbs and tracks. */
export function rangePlugin({ addVariant }: PluginAPI): void {
    addVariant('thumb-w', '&::-webkit-slider-thumb');
    addVariant('thumb-m', '&::-moz-range-thumb');
    addVariant('track-w', '&::-webkit-slider-runnable-track');
    addVariant('track-m', '&::-moz-range-track');
}

export default rangePlugin;
