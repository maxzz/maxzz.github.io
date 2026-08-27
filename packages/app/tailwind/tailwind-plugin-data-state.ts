import type { PluginAPI } from 'tailwindcss/plugin';

const states = ['open', 'closed', 'on', 'checked', 'unchecked'] as const;

function dataStateVariant(state: (typeof states)[number], { addVariant }: PluginAPI): void {
    addVariant(`data-state-${state}`, `&[data-state='${state}']`);
    addVariant(`group-data-state-${state}`, `:where(.group)[data-state='${state}'] &`);
    addVariant(`peer-data-state-${state}`, `:where(.peer)[data-state='${state}'] ~ &`);
}

/** Variants for styling Radix-UI `data-state` attributes. */
export function dataStatePlugin(api: PluginAPI): void {
    for (const state of states) {
        dataStateVariant(state, api);
    }
}

export default dataStatePlugin;
