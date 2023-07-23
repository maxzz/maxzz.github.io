import { ProjectType } from "../store-types";
import * as images from "./store-images";

export const projectsNpm: ProjectType[] = [
    {
        primary: 'npm',
        id: "rardir",
        description: "Utility to pack meta data inside specified folders.",
        urlGithub: "https://github.com/maxzz/rardir",
        urlDemo: "https://www.npmjs.com/package/rardir",
        urlPreview: images.npm,
        localPath: "C:/Y/w/1-node/1-utils/rardir",
        stack: ['npm', 'ts'],
    },
    {
        primary: 'npm',
        id: "rarsrt",
        description: "Utility to combine .SRT subtitles with .MP4 files inside specified folders.",
        urlGithub: "https://github.com/maxzz/rarsrt",
        urlDemo: "https://www.npmjs.com/package/rarsrt",
        urlPreview: images.npm,
        localPath: "C:/Y/w/1-node/1-utils/merge-video-subtitles",
        stack: ['npm', 'ts'],
    },
    {
        primary: 'npm',
        id: "srt-from-vtt",
        description: "Utility to convert .vtt files to .srt format.",
        urlGithub: "https://github.com/maxzz/srt-from-vtt",
        urlDemo: "https://github.com/maxzz/srt-from-vtt", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/1-node/1-utils/srt-from-vtt",
        stack: ['ts'],
    },
    {
        primary: 'npm',
        id: "gluehtml",
        description: "Glue HTML local external files into solid HTML.",
        urlGithub: "https://www.npmjs.com/package/gluehtml",
        urlDemo: "https://www.npmjs.com/package/gluehtml",
        urlPreview: images.gluehtml,
        localPath: "C:/Y/w/1-node/1-utils/create-single-html",
        stack: ['npm', 'ts'],
    },
    {
        primary: 'npm',
        id: "netsh-rule",
        description: "Utility to generate a batch file to manage inbound and outbound Windows firewall connections for a single .exe file or all .exe files in folder.",
        urlGithub: "https://github.com/maxzz/netsh-rule",
        urlDemo: "https://www.npmjs.com/package/netsh-rule",
        urlPreview: images.npm,
        localPath: "C:/Y/w/1-node/1-utils/netsh-firewall-rules",
        stack: ['npm', 'ts'],
    },
    {
        primary: 'npm',
        id: "topdirs",
        description: "The topdirs utility replicates the folder structure without copying the files it contains.",
        urlGithub: "https://github.com/maxzz/topdirs",
        urlDemo: "https://github.com/maxzz/topdirs", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/1-node/1-utils/topdirs",
        stack: ['npm', 'ts'],
    },
    {
        primary: 'npm',
        id: "sftp-shell",
        description: "Transfer files to/from FTP server over SFTP protocol",
        urlGithub: "https://github.com/maxzz/sftp-shell",
        urlDemo: "https://github.com/maxzz/sftp-shell", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/0-dp/utils/sftp/sftp-shell",
        stack: ['ts'],
    },
    {
        primary: 'npm',
        id: "sftp-test",
        description: "Test transfer files to/from FTP server over SFTP protocol",
        urlGithub: "https://github.com/maxzz/sftp-test",
        urlDemo: "https://github.com/maxzz/sftp-test", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/0-dp/utils/sftp/sftp-test",
        stack: ['js'],
    },
    {
        primary: 'npm',
        id: "spawn-loading-test",
        description: "Node.js test with spawning child processes and a control panel via a web interface.",
        urlGithub: "https://github.com/maxzz/spawn-loading-test",
        urlDemo: "https://github.com/maxzz/spawn-loading-test", // no demo
        urlPreview: images.spawnLoadingTest,
        localPath: "C:/Y/w/1-node/1-utils/spawn-loading-test",
        stack: ['js'],
    },
    {
        primary: 'npm',
        id: "server-ocr",
        description: "Explore the Tesseract OCR engine.",
        urlGithub: "https://github.com/maxzz/server-ocr",
        urlDemo: "https://github.com/maxzz/server-ocr", // no demo
        urlPreview: images.serverOcr,
        localPath: "C:/Y/w/2-web/7-my-webpages/server-ocr",
        stack: ['npm', 'js'],
    },
    {
        primary: 'npm',
        id: "test-graphql",
        description: "GraphQL server test implementation.",
        urlGithub: "https://github.com/maxzz/test-graphql",
        urlDemo: "https://github.com/maxzz/test-graphql", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/7-my-webpages/test-graphql",
        stack: ['js'],
    },
    {
        primary: 'npm',
        id: "work-weeks",
        description: "Utility to generate working weeks per year.",
        urlGithub: "https://github.com/maxzz/work-weeks",
        urlDemo: "https://www.npmjs.com/package/work-weeks",
        urlPreview: images.npm,
        localPath: "C:/Y/w/1-node/1-utils/work-weeks-calendar",
        stack: ['npm', 'ts'],
    },
    {
        primary: 'npm',
        id: "maxzz-proxy",
        description: "Proxy server with CORS.",
        urlGithub: "https://github.com/maxzz/maxzz-proxy",
        urlDemo: "https://github.com/maxzz/maxzz-proxy", // no demo
        urlPreview: images.npm,
        localPath: "C:/Y/w/1-node/1-utils/1-web-scraping/maxzz-proxy",
        stack: ['js'],
    },
    {
        primary: 'npm',
        id: "maxzz-python",
        description: "Creating GitHub frontpage readme.md file with Python.",
        urlGithub: "https://github.com/maxzz/maxzz-python",
        urlDemo: "https://github.com/maxzz/maxzz-python", // no demo
        urlPreview: images.npm,
        localPath: "cannot find the local project anymore",
        stack: ['python'],
    },
    {
        primary: 'npm',
        id: "ts-sjcl",
        description: "Stanford Javascript Crypto Library (SJCL) upgraded to Typescript and ES6 module format.",
        urlGithub: "https://github.com/maxzz/ts-sjcl",
        urlDemo: "https://github.com/maxzz/ts-sjcl", // no demo
        urlPreview: images.npm, // no img
        localPath: "C:/Y/w/2-web/0-dp/utils/ts-sjcl",
        stack: ['ts'],
    },
    {
        primary: 'npm',
        id: "ts-srpclient",
        description: "Secure Remote Password library upgraded to Typescript and ES6 module format.",
        urlGithub: "https://github.com/maxzz/ts-srpclient",
        urlDemo: "https://github.com/maxzz/ts-srpclient", // no demo
        urlPreview: images.npm, // no img
        localPath: "C:/Y/w/2-web/0-dp/utils/ts-srpclient",
        stack: ['ts'],
    },
    {
        primary: 'npm',
        id: "pm-manifest",
        description: "PM manifest definitions.",
        urlGithub: "https://github.com/maxzz/pm-manifest",
        urlDemo: "https://github.com/maxzz/pm-manifest", // no demo
        urlPreview: images.npm, // no img
        localPath: "C:/Y/w/2-web/0-dp/utils/pm-manifest",
        stack: ['ts'],
    },
    {
        primary: 'npm',
        id: "pm-manifest-icons",
        description: "PM manifest icons.",
        urlGithub: "https://github.com/maxzz/pm-manifest-icons",
        urlDemo: "https://github.com/maxzz/pm-manifest-icons", // no demo
        urlPreview: images.npm, // no img
        localPath: "C:/Y/w/2-web/0-dp/utils/pm-manifest-icons",
        stack: ['react', 'ts'],
    },
];
