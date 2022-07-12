export type ProjectType = {
    caption: string;
    info: string;
    urlProject: string;
    urlDemo?: string;
    preview: string;
};

export type SectionType = {
    name: string;
    projects: ProjectType[];
};
