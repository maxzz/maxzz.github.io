import { ProjectType } from "../store-types";
import * as images from "./store-images";

export const projectsSu: ProjectType[] = [ // tech stack updates
    {
        primary: 'npm',
        id: "wmax-vanilla-gulp",
        description: "Build with gulp",
        urlGithub: "https://github.com/maxzz/wmax-vanilla-gulp",
        urlDemo: "https://github.com/maxzz/wmax-vanilla-gulp", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/wmax-vanilla-gulp",
        stack: ['ts'],
    },
    {
        primary: 'npm',
        id: "wmax-vanilla-vite",
        description: "Build with Vite",
        urlGithub: "https://github.com/maxzz/wmax-vanilla-vite",
        urlDemo: "https://github.com/maxzz/wmax-vanilla-vite", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/8-websites-ideas/9-web-expiriments/wmax-vanilla-vite",
        stack: ['ts'],
    },
];
