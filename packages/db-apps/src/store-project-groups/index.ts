import { type SectionType } from "./9-types";
import { projectsDp } from "./1-defs-dp";
import { projectsNpm } from "./2-defs-npm";
import { projectsUx } from "./3-defs-react";
import { projectsStack } from "./4-defs-stack-1";
import { projectsStackElectron } from "./4-defs-stack-2-electron";
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
        projects: projectsStack,
    },
    {
        name: 'Electron',
        projects: projectsStackElectron,
    },
    {
        name: 'node, npm',
        projects: projectsNpm,
    },
    {
        name: 'Digital Persona',
        projects: projectsDp,
    },
    {
        name: 'UX, Vue',
        projects: projectsVue,
    },
    {
        name: 'UI libraries',
        projects: projectsUiLibs,
    },
    {
        name: 'What if...',
        projects: projectsWhatif,
    },
];
