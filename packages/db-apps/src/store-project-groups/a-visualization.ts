import { type ProjectType } from "./9-types";
import * as images from "../assets";

export const projectsVisualization: ProjectType[] = [
    {
        primary: 'visualization',
        id: "transitions",
        description: "Visualization of transitions.",
        urlGithub: "https://github.com/maxzz/transitions",
        urlDemo: "https://maxzz.github.io/transitions",
        urlPreview: images.transitionsWeb,
        localPath: "C:/y/w/2-web/0-stack/7-animations/transitions",
        stack: ['react', 'ts', 'tw', 'shadcn', 'jotai', 'valtio'],
    },
    {
        primary: 'visualization',
        id: "transitions-chrome",
        description: "Visualization of transitions in Chrome.",
        urlGithub: "https://github.com/maxzz/transitions-chrome",
        urlDemo: "https://maxzz.github.io/transitions-chrome",
        urlPreview: images.transitionsChrome,
        localPath: "C:/y/w/2-web/0-stack/7-animations/transitions-chrome",
        stack: ['react', 'ts', 'tw', 'shadcn', 'jotai', 'valtio'],
    },
    {
        primary: 'visualization',
        id: "mermaid-out",
        description: "Visualization of transitions in Chrome.",
        urlGithub: "https://github.com/maxzz/mermaid-out",
        urlDemo: "https://maxzz.github.io/mermaid-out",
        urlPreview: images.mermaidOut,
        localPath: "C:/y/w/2-web/0-stack/2-editors/mermaid-out",
        stack: ['react', 'ts', 'tw', 'shadcn', 'jotai', 'valtio', 'mermaid'],
    },
];
