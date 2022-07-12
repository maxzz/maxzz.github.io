export type ProjectType = {
    caption: string;        // project name on github
    description: string;    // project description
    urlGithub: string;      // URL to github source
    urlDemo?: string;       // URL to demo project
    preview: string;        // image preview URL
    localPath?: string;     // folder path on local harddrive
};

export type SectionType = {
    name: string;
    projects: ProjectType[];
};
