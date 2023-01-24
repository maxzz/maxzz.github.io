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
