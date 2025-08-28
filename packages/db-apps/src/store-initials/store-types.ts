import { ImageAttrs } from "vite-plugin-image-presets";

export type ImageUrl = ImageAttrs[] | string;

export type ProjectType = {
    id: string;
    primary: string;
    description: string;
    urlGithub: string;
    urlDemo?: string;
    urlPreview: ImageUrl;
    localPath?: string;
    stack?: string[];
};

export type SectionType = {
    name: string;
    projects: ProjectType[];
};
