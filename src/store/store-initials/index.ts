import { SectionType } from "../store-types";
import { projectsDp } from "./store-initials-dp";
import { projectsNpm } from "./store-initials-npm";
import { projectsUx } from "./store-initials-react";
import { projectsVue } from "./store-initials-vue";

//TODO: add C:\Y\w\2-web\0-dp\utils\sftp-shell
//TODO: add C:\Y\w\2-web\0-dp\utils\sftp-test

export const sections: SectionType[] = [
    {
        name: 'UX,React',
        projects: projectsUx,
    },
    {
        name: 'DigitalPersona',
        projects: projectsDp,
    },
    {
        name: 'npm,node.js',
        projects: projectsNpm,
    },
    {
        name: 'UX,Vue',
        projects: projectsVue,
    },
];
