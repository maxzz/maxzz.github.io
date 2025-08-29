import { type SectionType } from "./9-types";
import { projectsDp } from "./1-defs-dp";
import { projectsNpm } from "./2-defs--npm";
import { projectsUx } from "./3-defs--react";
import { projectsSt } from "./4-defs--stack";
import { projectsVue } from "./5-defs--vue";

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
