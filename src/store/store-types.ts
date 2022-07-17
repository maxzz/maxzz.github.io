import { ImageAttrs } from "vite-plugin-image-presets";

export type ImageUrl = ImageAttrs[] | string;

export type ProjectType = {
    //id: string;             // unique ID
    caption: string;        // project name on github; caption is already unique ID
    description: string;    // project description
    urlGithub: string;      // URL to github source
    urlDemo?: string;       // URL to demo project
    previewUrl: ImageUrl;   // image preview URL
    localPath?: string;     // folder path on local harddrive
};

export type SectionType = {
    name: string;
    projects: ProjectType[];
};
