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
        stack: ['react', 'ts', 'sass'],
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
