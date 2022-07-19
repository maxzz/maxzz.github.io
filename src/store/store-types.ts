import { ImageAttrs } from "vite-plugin-image-presets";

export type ImageUrl = ImageAttrs[] | string;

export type ProjectType = {
    id: string;             // project ID is a project name on github; caption is already unique ID
    primary: string;        // primary category
    description: string;    // project description
    urlGithub: string;      // URL to github source
    urlDemo?: string;       // URL to demo project
    urlPreview: ImageUrl;   // image preview URL
    localPath?: string;     // folder path on local harddrive
    stack?: string[];       // react, vite, svelte, tailwindcss
    //date: created, updated
};

export type SectionType = {
    name: string;
    projects: ProjectType[];
};
