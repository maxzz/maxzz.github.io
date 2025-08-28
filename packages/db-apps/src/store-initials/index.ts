import { SectionType } from "./store-types";
import { projectsDp } from "./store-initials-dp";
import { projectsNpm } from "./store-initials-npm";
import { projectsUx } from "./store-initials-react";
import { projectsSt } from "./store-initials-stack";
import { projectsVue } from "./store-initials-vue";

export const sections: SectionType[] = [
    {
        name: 'UX, react',
        projects: projectsUx,
    },
    {
        name: 'digitalPersona',
        projects: projectsDp,
    },
    {
        name: 'node, npm',
        projects: projectsNpm,
    },
    {
        name: 'UX, vue',
        projects: projectsVue,
    },
    {
        name: 'Stack',
        projects: projectsSt,
    },
];
