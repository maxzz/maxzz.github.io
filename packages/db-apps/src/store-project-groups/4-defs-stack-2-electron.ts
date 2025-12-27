import { type ProjectType } from "./9-types";
import * as images from "../assets";

export const projectsStackElectron: ProjectType[] = [ // tech stack updates
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
        id: "electron-vite-2025", //04.29.25
        description: "Electron app with electron-vite 2025 edition",
        urlGithub: "https://github.com/maxzz/electron-vite-2025",
        urlDemo: "https://github.com/maxzz/electron-vite-2025", // no demo
        urlPreview: images.electronVite2025,
        localPath: "C:/Y/w/2-web/0-stack/5-electron/electron-vite-2025",
        stack: ['react', 'ts', 'electron'],
    },
    {
        primary: 'stack',
        id: "electron-window-monitor",
        description: "Electron app to test nodejs napi plugins",
        urlGithub: "https://github.com/maxzz/electron-window-monitor",
        urlDemo: "https://github.com/maxzz/electron-window-monitor", // no demo
        urlPreview: images.electronWindowMonitor,
        localPath: "C:/Y/w/2-web/0-dp/win-mon",
        stack: ['react', 'tw', 'ts', 'electron'],
    },
    {
        primary: 'stack',
        id: "win-mon-copy", //12.20.25
        description: "Electron app with electron-vite 2025 edition",
        urlGithub: "https://github.com/maxzz/win-mon-copy",
        urlDemo: "https://github.com/maxzz/win-mon-copy", // no demo
        urlPreview: images.npm, // no img
        localPath: "C:/y/w/2-web/0-dp/win-mon-copy",
        stack: ['react', 'ts', 'electron'],
    },
];

//TODO: C:\Y\w\2-web\0-stack\6-ui\1-listview\listview-tankstack-table
//TODO: C:\Y\w\2-web\0-stack\6-ui\1-listview\listview-tankstack-table-ai
