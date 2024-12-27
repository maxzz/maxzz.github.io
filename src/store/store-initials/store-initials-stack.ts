import { ProjectType } from "../store-types";
import * as images from "./store-images";

export const projectsSt: ProjectType[] = [ // tech stack updates
    {
        primary: 'stack',
        id: "shadcn-tv",
        description: "Shadcn-tv is a clone of shadcn manually installed components.",
        urlGithub: "https://github.com/maxzz/shadcn-tv",
        urlDemo: "https://maxzz.github.io/shadcn-tv",
        urlPreview: images.shadcnTv,
        localPath: "C:/Y/w/2-web/0-stack/shadcn-tv",
        stack: ['radix-ui', 'shadcn'],
    },
    {
        primary: 'stack',
        id: "forms-formik",
        description: "React forms playground with Formik",
        urlGithub: "https://github.com/maxzz/forms-formik",
        urlDemo: "https://maxzz.github.io/forms-formik",
        urlPreview: images.formsFormik,
        localPath: "C:/Y/w/2-web/0-stack/forms-formik",
        stack: ['react', 'tw', 'ts', 'formik'],
    },
    {
        primary: 'stack',
        id: "forms-wreducer",
        description: "React forms without state management libraries",
        urlGithub: "https://github.com/maxzz/forms-wreducer",
        urlDemo: "https://maxzz.github.io/forms-wreducer",
        urlPreview: images.formsWreducer,
        localPath: "C:/Y/w/2-web/0-stack/forms-wreducer",
        stack: ['react', 'ts', 'css'],
    },
    {
        primary: 'stack',
        id: "forms-react-hook-form",
        description: "React forms with react-hook-form",
        urlGithub: "https://github.com/maxzz/forms-react-hook-form",
        urlDemo: "https://maxzz.github.io/forms-react-hook-form",
        urlPreview: images.formsReactHookForm,
        localPath: "C:/Y/w/2-web/0-stack/forms-react-hook-form",
        stack: ['react', 'ts', 'css', 'react-hook-form'],
    },
    {
        primary: 'stack',
        id: "forms-react-hook-form-radix",
        description: "React forms with react-hook-form",
        urlGithub: "https://github.com/maxzz/forms-react-hook-form-radix",
        urlDemo: "https://maxzz.github.io/forms-react-hook-form-radix",
        urlPreview: images.formsReactHookFormRadix,
        localPath: "C:/Y/w/2-web/0-stack/forms-react-hook-form-radix",
        stack: ['react', 'jotai', 'valtio', 'tw', 'react-hook-form', 'radix-ui'],
    },
    {
        primary: 'stack',
        id: "reactivity-valtio-jotai",
        description: "React state management with valtio and jotai libraries",
        urlGithub: "https://github.com/maxzz/reactivity-valtio-jotai",
        urlDemo: "https://maxzz.github.io/reactivity-valtio-jotai",
        urlPreview: images.reactivityValtioJotai,
        localPath: "C:/Y/w/2-web/0-stack/reactivity-valtio-jotai",
        stack: ['react', 'jotai', 'valtio', 'tw', 'radix-ui'],
    },
    {
        primary: 'stack',
        id: "srp-play-tssrp6a",
        description: "Stanford SRP protocol playground",
        urlGithub: "https://github.com/maxzz/srp-play-tssrp6a",
        urlDemo: "https://maxzz.github.io/srp-play-tssrp6a",
        urlPreview: images.srpPlayTssrp6a,
        localPath: "C:/Y/w/2-web/0-stack/srp-play-tssrp6a",
        stack: ['react', 'jotai', 'valtio', 'tw', 'radix-ui'],
    },
    {
        primary: 'stack',
        id: "workers-comlink",
        description: "React + Worker + Vite using comlink",
        urlGithub: "https://github.com/maxzz/workers-comlink",
        urlDemo: "https://maxzz.github.io/workers-comlink",
        urlPreview: images.workersComlink,
        localPath: "C:/Y/w/2-web/0-stack/workers-comlink",
        stack: ['react', 'jotai', 'valtio', 'tw', 'radix-ui'],
    },
    {
        primary: 'stack',
        id: "ui-vanilla-dropdown",
        description: "Vanilla JS dropdown menu",
        urlGithub: "https://github.com/maxzz/ui-vanilla-dropdown",
        urlDemo: "https://maxzz.github.io/ui-vanilla-dropdown",
        urlPreview: images.uiVanillaDropdown,
        localPath: "C:/Y/w/2-web/0-stack/ui-vanilla-dropdown",
        stack: ['ts', 'css'],
    },
    {
        primary: 'stack',
        id: "ui-pie-menu",
        description: "Pie menu with SASS",
        urlGithub: "https://github.com/maxzz/ui-pie-menu",
        urlDemo: "https://maxzz.github.io/ui-pie-menu",
        urlPreview: images.uiPieMenu,
        localPath: "C:/Y/w/2-web/0-stack/ui-pie-menu",
        stack: ['react', 'valtio', 'ts', 'sass'],
    },
    {
        primary: 'stack',
        id: "electron-react",
        description: "Electron app with vite HMR",
        urlGithub: "https://github.com/maxzz/electron-react",
        urlDemo: "https://github.com/maxzz/electron-react", // no demo
        urlPreview: images.electronReact,
        localPath: "C:/Y/w/2-web/0-stack/5-electron/electron-react",
        stack: ['react', 'tw', 'ts', 'electron'],
    },
    {
        primary: 'stack',
        id: "electron-react24",
        description: "Electron app with vite HMR 2024: 'p create @quick-start/electron .'",
        urlGithub: "https://github.com/maxzz/electron-react24",
        urlDemo: "https://github.com/maxzz/electron-react24", // no demo
        urlPreview: images.electronReact24,
        localPath: "C:/Y/w/2-web/0-stack/5-electron/electron-react24",
        stack: ['react', 'ts', 'electron'],
    },
    {
        primary: 'stack',
        id: "electron-window-monitor",
        description: "Electron app to test nodejs napi plugins",
        urlGithub: "https://github.com/maxzz/electron-window-monitor",
        urlDemo: "https://github.com/maxzz/electron-window-monitor", // no demo
        urlPreview: images.npm, // no img
        localPath: "C:/Y/w/2-web/0-stack/5-electron/electron-window-monitor",
        stack: ['react', 'tw', 'ts', 'electron'],
    },
    {
        primary: 'stack',
        id: "electron-vite-plugin-e",
        description: "Electron app with vite-plugin-electron, slow but vite compliant",
        urlGithub: "https://github.com/maxzz/electron-vite-plugin-e",
        urlDemo: "https://github.com/maxzz/electron-vite-plugin-e", // no demo
        urlPreview: images.npm, // no img
        localPath: "C:/Y/w/2-web/0-stack/5-electron/electron-vite-plugin-e",
        stack: ['react', 'ts', 'electron'],
    },
    {
        primary: 'stack',
        id: "react-spring-tests",
        description: "Exploring different use cases for the react-spring library.",
        urlGithub: "https://github.com/maxzz/react-spring-tests",
        urlDemo: "https://maxzz.github.io/react-spring-tests",
        urlPreview: images.reactSpringTests,
        localPath: "C:/Y/w/2-web/8-websites-ideas/4-react/1-animations/react-spring-tests",
    },
    {
        primary: 'stack',
        id: "react-spring-tests-sprung",
        description: "Various scenarios for using the react-spring library.",
        urlGithub: "https://github.com/maxzz/react-spring-tests-sprung",
        urlDemo: "https://maxzz.github.io/react-spring-tests-sprung",
        urlPreview: images.reactSpringTestsSprung,
        localPath: "C:/Y/w/2-web/8-websites-ideas/4-react/1-animations/react-spring-tests-sprung",
    },

    {
        primary: 'stack',
        id: "react-spring-message-hub",
        description: "Message Toaster with @react-spring/web",
        urlGithub: "https://github.com/maxzz/react-spring-message-hub",
        urlDemo: "https://maxzz.github.io/react-spring-message-hub",
        urlPreview: images.reactSpringMessageHub,
        localPath: "C:/Y/w/2-web/0-stack/react-spring-message-hub",
        stack: ['react', 'ts'],
    },
    {
        primary: 'stack',
        id: "react-spring-transition-pages",
        description: "Page transitions using the recent react-spring.",
        urlGithub: "https://github.com/maxzz/react-spring-transition-pages",
        urlDemo: "https://maxzz.github.io/react-spring-transition-pages",
        urlPreview: images.reactSpringTransitionPages,
        localPath: "C:/Y/w/2-web/0-stack/react-spring-transition-pages",
        stack: ['react', 'ts'],
    },
    {
        primary: 'stack',
        id: "react-spring-transition-chain",
        description: "@react-spring/web animations chain",
        urlGithub: "https://github.com/maxzz/react-spring-transition-chain",
        urlDemo: "https://maxzz.github.io/react-spring-transition-chain",
        urlPreview: images.reactSpringTransitionChain,
        localPath: "C:/Y/w/2-web/0-stack/react-spring-transition-chain",
        stack: ['react', 'ts'],
    },
    {
        primary: 'stack',
        id: "wmax-vanilla-vite",
        description: "Build with Vite",
        urlGithub: "https://github.com/maxzz/wmax-vanilla-vite",
        urlDemo: "https://maxzz.github.io/wmax-vanilla-vite",
        urlPreview: images.wmaxVanillaVite,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/wmax-vanilla-vite",
        stack: ['ts'],
    },
    {
        primary: 'stack',
        id: "wmax-vanilla-gulp",
        description: "Build with gulp",
        urlGithub: "https://github.com/maxzz/wmax-vanilla-gulp",
        urlDemo: "https://github.com/maxzz/wmax-vanilla-gulp", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/wmax-vanilla-gulp",
        stack: ['ts'],
    },
    {
        primary: 'stack',
        id: "wmax-vanilla-gulp",
        description: "Build with gulp",
        urlGithub: "https://github.com/maxzz/wmax-vanilla-gulp",
        urlDemo: "https://github.com/maxzz/wmax-vanilla-gulp", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/wmax-vanilla-gulp",
        stack: ['ts'],
    },
    {
        primary: 'stack',
        id: "editor-codemirror-highlight",
        description: "Code highlighter with codemirror and tokens cache.",
        urlGithub: "https://github.com/maxzz/editor-codemirror-highlight",
        urlDemo: "https://maxzz.github.io/editor-codemirror-highlight",
        urlPreview: images.editorCodemirrorHighlight,
        localPath: "C:/Y/w/2-web/0-stack/2-editors/cm-highlight",
        stack: ['radix-ui', 'shadcn', 'codemirror'],
    },
    {
        primary: 'stack',
        id: "highlight-xml-md",
        description: "Simple XML/MD syntax highlighting.",
        urlGithub: "https://github.com/maxzz/highlight-xml-md",
        urlDemo: "https://maxzz.github.io/highlight-xml-md",
        urlPreview: images.highlightXmlMd,
        localPath: "C:/Y/w/2-web/0-stack/2-editors/highlight-xml-md",
        stack: ['radix-ui', 'shadcn', 'react-syntax-highlighter'],
    },
    {
        primary: 'stack',
        id: "routes-nextjs",
        description: "Next.js Static Routes.",
        urlGithub: "https://github.com/maxzz/routes-nextjs",
        urlDemo: "https://github.com/maxzz/routes-nextjs", // no demo
        urlPreview: images.routesNextjs,
        localPath: "C:/Y/w/2-web/0-stack/3-router/routes-nextjs",
        stack: ['radix-ui', 'shadcn', 'nextjs'],
    },
    {
        primary: 'stack',
        id: "routes-router",
        description: "React router with react-router-dom.",
        urlGithub: "https://github.com/maxzz/routes-router",
        urlDemo: "https://maxzz.github.io/routes-router",
        urlPreview: images.routesRouter,
        localPath: "C:/Y/w/2-web/0-stack/3-router/routes-router",
        stack: ['radix-ui', 'shadcn', 'nextjs'],
    },
    {
        primary: 'stack',
        id: "routes-tan-router",
        description: "React router with react-router-dom.",
        urlGithub: "https://github.com/maxzz/routes-tan-router",
        urlDemo: "https://maxzz.github.io/routes-tan-router",
        urlPreview: images.routesTanRouter,
        localPath: "C:/Y/w/2-web/0-stack/3-router/routes-tan-router",
        stack: ['radix-ui', 'shadcn', 'nextjs'],
    },
    {
        primary: 'stack',
        id: "flow-xarrows",
        description: "React router with react-router-dom.",
        urlGithub: "https://github.com/maxzz/flow-xarrows",
        urlDemo: "https://maxzz.github.io/flow-xarrows",
        urlPreview: images.flowXarrows,
        localPath: "C:/Y/w/2-web/0-stack/4-flow/flow-xarrows",
        stack: ['radix-ui', 'shadcn', 'nextjs'],
    },
];