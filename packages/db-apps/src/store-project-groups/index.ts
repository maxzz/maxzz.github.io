import { type SectionType } from "./9-types";
import { projectsDp } from "./1-defs-dp";
import { projectsNpm } from "./2-defs-npm";
import { projectsUx } from "./3-defs-react";
import { projectsSt } from "./4-defs-stack";
import { projectsVue } from "./5-defs-vue";
import { projectsWhatif } from "./6-defs-what-if";
import { projectsUiLibs } from "./7-ui-libs";

export const sections: SectionType[] = [
    {
        name: 'UX, React',
        projects: projectsUx,
    },
    {
        name: 'Stack',
        projects: projectsSt,
    },
    {
        name: 'Digital Persona',
        projects: projectsDp,
    },
    {
        name: 'node, npm',
        projects: projectsNpm,
    },
    {
        name: 'UX, Vue',
        projects: projectsVue,
    },
    {
        name: 'What if...',
        projects: projectsWhatif,
    },
    {
        name: 'UI libraries',
        projects: projectsUiLibs,
    },
];
