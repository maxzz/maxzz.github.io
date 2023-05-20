import { ProjectType } from "../store-types";
import * as images from "./store-images";

export const projectsSt: ProjectType[] = [ // tech stack updates
    {
        primary: 'stack',
        id: "forms-formik",
        description: "React forms playground with Formik",
        urlGithub: "https://github.com/maxzz/forms-formik",
        urlDemo: "https://maxzz.github.io/forms-formik",
        urlPreview: images.formsFormik,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/forms-formik",
        stack: ['react', 'tw', 'ts', 'formik'],
    },
    {
        primary: 'stack',
        id: "forms-wreducer",
        description: "React forms without state management libraries",
        urlGithub: "https://github.com/maxzz/forms-wreducer",
        urlDemo: "https://maxzz.github.io/forms-wreducer",
        urlPreview: images.formsWreducer,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/forms-wreducer",
        stack: ['react', 'ts', 'css'],
    },
    {
        primary: 'stack',
        id: "forms-react-hook-form",
        description: "React forms with react-hook-form",
        urlGithub: "https://github.com/maxzz/forms-react-hook-form",
        urlDemo: "https://maxzz.github.io/forms-react-hook-form",
        urlPreview: images.formsReactHookForm,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/forms-react-hook-form",
        stack: ['react', 'ts', 'css', 'react-hook-form'],
    },
    {
        primary: 'stack',
        id: "forms-react-hook-form-radix",
        description: "React forms with react-hook-form",
        urlGithub: "https://github.com/maxzz/forms-react-hook-form-radix",
        urlDemo: "https://maxzz.github.io/forms-react-hook-form-radix", // no demo yet
        urlPreview: images.formsReactHookFormRadix,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/forms-react-hook-form-radix",
        stack: ['react', 'jotai', 'valtio', 'tw', 'react-hook-form', 'radix-ui'],
    },
    {
        primary: 'stack',
        id: "reactivity-valtio-jotai",
        description: "React state management with valtio and jotai libraries",
        urlGithub: "https://github.com/maxzz/reactivity-valtio-jotai",
        urlDemo: "https://maxzz.github.io/reactivity-valtio-jotai", // no demo yet
        urlPreview: images.reactivityValtioJotai, // no img yet
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/reactivity-valtio-jotai",
        stack: ['react', 'jotai', 'valtio', 'tw', 'radix-ui'],
    },
    {
        primary: 'stack',
        id: "srp-play-tssrp6a",
        description: "Stanford SRP protocol playground",
        urlGithub: "https://github.com/maxzz/srp-play-tssrp6a",
        urlDemo: "https://maxzz.github.io/srp-play-tssrp6a", // no demo yet
        urlPreview: images.reactivityValtioJotai, // no img yet
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/srp-play-tssrp6a",
        stack: ['react', 'jotai', 'valtio', 'tw', 'radix-ui'],
    },
    {
        primary: 'stack',
        id: "ui-vanilla-dropdown",
        description: "Vanilla JS dropdown menu",
        urlGithub: "https://github.com/maxzz/ui-vanilla-dropdown",
        urlDemo: "https://maxzz.github.io/ui-vanilla-dropdown",
        urlPreview: images.uiVanillaDropdown,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/ui-vanilla-dropdown",
        stack: ['ts', 'css'],
    },
    {
        primary: 'stack',
        id: "ui-pie-menu",
        description: "Pie menu with SASS",
        urlGithub: "https://github.com/maxzz/ui-pie-menu", // no demo
        urlDemo: "https://maxzz.github.io/ui-pie-menu", // no demo
        urlPreview: images.uiPieMenu,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/ui-pie-menu",
        stack: ['react', 'valtio', 'ts', 'sass'],
    },
    {
        primary: 'stack',
        id: "electron-react",
        description: "Electron app with vite HMR",
        urlGithub: "https://github.com/maxzz/electron-react",
        urlDemo: "https://github.com/maxzz/electron-react", // no demo
        urlPreview: images.electronReact,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/electron-react",
        stack: ['react', 'tw', 'ts', 'electron'],
    },
    {
        primary: 'stack',
        id: "electron-vite-plugin-e",
        description: "Electron app with vite-plugin-electron, slow but vite compliant",
        urlGithub: "https://github.com/maxzz/electron-vite-plugin-e",
        urlDemo: "https://github.com/maxzz/electron-vite-plugin-e", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/stack/electron-vite-plugin-e",
        stack: ['react', 'ts', 'electron'],
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
];