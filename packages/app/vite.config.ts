import path from "node:path";
import { defineConfig, type Plugin, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import replace from "@rollup/plugin-replace";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";

const buildAt = () => {
    const d = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
};

const buildVersion = () => {
    const d = new Date();
    return `${d.getFullYear().toString().substring(3)}.${d.getMonth() + 1}${d.getDate()} (${d.getHours()}${d.getMinutes()})`;
};

/** vite-plugin-image-presets 0.3.5 uses node:path.join, so Windows builds encode `\` as %5C in src/srcset. */
function fixWindowsImagePresetUrls(): Plugin {
    return {
        name: "fix-windows-image-preset-urls",
        transform(code, id) {
            if (!id.includes("preset=") || !code.includes("%5C")) {
                return;
            }
            return code.replaceAll("%5C", "/");
        },
    };
}

// https://vitejs.dev/config/
export default (() => defineConfig({
    base: "",
    plugins: [
        tailwindcss(),
        react(),

        imagePresets({
            thumbnail: widthPreset({
                className: 'img thumb',
                loading: 'lazy',
                widths: [128],

                //height: 190, // avoid layout shift
                //baseWidth: 48,

                formats: {
                    // avif: {},
                    // webp: { quality: 70 },
                    // png: {},
                    jpg: { quality: 77 }
                },
            }),
        }) as PluginOption,
        fixWindowsImagePresetUrls(),

        replace({
            values: {
                __BUILD_DATE__: buildAt(),
                __BUILD_VER__: buildVersion(),
            },
            preventAssignment: true,
        }),

        visualizer({
            filename: 'visualization.html',
            template: 'sunburst', // sunburst - d3 style (good as default as well); treemap - table (default); network - graph (slow to open).
            gzipSize: true,
            brotliSize: true,
        }),

    ],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        },
    },

    build: {
        // minify: false,
        minify: 'esbuild',
        target: "esnext",
        chunkSizeWarningLimit: 600,
        // rolldownOptions: {
        //     output: {
        //         codeSplitting: {
        //             groups: [
        //                 { name: "react", test: /[\\/]node_modules[\\/](?:\.pnpm[\\/][^/\\]+[\\/])?node_modules[\\/](?:react|react-dom)[\\/]/ },
        //                 { name: "motion", test: /[\\/]node_modules[\\/](?:\.pnpm[\\/][^/\\]+[\\/])?node_modules[\\/]motion[\\/]/ },
        //                 { name: "react-spring", test: /[\\/]node_modules[\\/](?:\.pnpm[\\/][^/\\]+[\\/])?node_modules[\\/]@react-spring[\\/]/ },
        //                 { name: "vendor", test: /[\\/]node_modules[\\/]/ },
        //             ],
        //         },
        //     },
        // },
    },

    server: {
        port: 3000,
    },
}));
