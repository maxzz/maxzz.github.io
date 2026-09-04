import path from "node:path";
import { type Plugin, type PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";
import replace from "@rollup/plugin-replace";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default (() => defineConfig({
    base: "",
    plugins: [
        tailwindcss(),
        react(),
        thumbnailImagePresets(),
        fixWindowsImagePresetUrls(),
        replaceBuildInfo(),
        bundleVisualizer(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        },
    },
    server: {
        port: 3000,
    },
    build: {
        rolldownOptions: {
            output: {
                codeSplitting: {
                    groups: [
                        {
                            name: vendorChunkName,
                            test: /[\\/]node_modules[\\/]/,
                        },
                    ],
                },
            },
        },
    },
}));

//---------------------------------------------------------------------------
// chunks grouping:

function vendorChunkName(id: string): string | null {
    const pkg = npmPackageName(id);
    if (!pkg) {
        return null;
    }

    if (pkg === 'react' || pkg === 'react-dom' || pkg === 'scheduler') {
        return 'react';
    }
    if (pkg === 'motion' || pkg === 'framer-motion') {
        return 'motion';
    }
    if (pkg === 'gsap' || pkg === '@gsap/react') {
        return 'gsap';
    }
    if (pkg === '@react-spring/web' || pkg.startsWith('@react-spring/')) {
        return 'react-spring';
    }

    return 'vendor';
}

/** Last `node_modules/<pkg>` segment. Works with pnpm's `.pnpm/<id>/node_modules/<pkg>` layout. */
function npmPackageName(id: string): string | undefined {
    const normalized = id.replaceAll('\\', '/');
    const idx = normalized.lastIndexOf(NODE_MODULES);
    if (idx === -1) {
        return undefined;
    }

    const rest = normalized.slice(idx + NODE_MODULES.length);
    const [scopeOrName, maybeName] = rest.split('/');
    if (!scopeOrName || scopeOrName.startsWith('.')) {
        return undefined;
    }

    return scopeOrName.startsWith('@') && maybeName
        ? `${scopeOrName}/${maybeName}`
        : scopeOrName;
}

const NODE_MODULES = '/node_modules/';

    // build: {
    //     // minify: false,
    //     minify: 'esbuild',
    //     target: "esnext",
    //     chunkSizeWarningLimit: 600,
    // },

//--------------------------------------------------------------------------- 

function thumbnailImagePresets(): PluginOption {
    return imagePresets({
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
    }) as PluginOption;
}

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

//--------------------------------------------------------------------------- 

const buildAt = () => {
    const d = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
};

const buildVersion = () => {
    const d = new Date();
    return `${d.getFullYear().toString().substring(3)}.${d.getMonth() + 1}${d.getDate()} (${d.getHours()}${d.getMinutes()})`;
};

function replaceBuildInfo(): PluginOption {
    return replace({
        values: {
            __BUILD_DATE__: buildAt(),
            __BUILD_VER__: buildVersion(),
        },
        preventAssignment: true,
    });
}

function bundleVisualizer(): PluginOption {
    return visualizer({
        filename: 'visualization.html',
        template: 'sunburst', // sunburst - d3 style (good as default as well); treemap - table (default); network - graph (slow to open).
        gzipSize: true,
        brotliSize: true,
    });
}
