import { ProjectType, SectionType } from "./store-types";

import previewDropzon from "../assets/pages/dropzone-2022-03-04_15-29-37.png";
import simpleBorderRadius from "../assets/pages/simple-border-radius22-2022-07-08_18-46-46.png";
import red3Curves from "../assets/pages/red3-curves-2021-08-18_3-57-11.png";
import borderRadiusGenerator from "../assets/pages/border-radius-generator-2020-12-18_4-44-41.png";
import red3Path from "../assets/pages/red3-path-2021-09-04_19-45-16.png";

export const projectsDp: ProjectType[] = [
    {
        caption: "Password manager investigation tool (PMIT)",
        info: "Experimenting with Data-Driven User Interfaces (D2UI)",
        urlProject: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
    // {
    //     caption: "",
    //     info: "",
    //     urlProject: "",
    //     urlDemo: "",
    //     preview: ,
    // },
];

export const projectsUx: ProjectType[] = [
    {
        caption: "simple-border-radius22",
        info: "CSS border radius generator",
        urlProject: "https://github.com/maxzz/simple-border-radius22",
        urlDemo: "https://maxzz.github.io/simple-border-radius22",
        preview: simpleBorderRadius,
    },
    {
        caption: "red3-curves",
        info: "Examination of the curves D3",
        urlProject: "https://github.com/maxzz/red3-curves",
        urlDemo: "https://maxzz.github.io/red3-curves",
        preview: red3Curves,
    },
    {
        caption: "border-radius-generator",
        info: "Simplest border radius generator with Vue.js Composition API",
        urlProject: "https://github.com/maxzz/border-radius-generator",
        urlDemo: "https://maxzz.github.io/border-radius-generator",
        preview: borderRadiusGenerator,
    },
    // {
    //     caption: "",
    //     info: "",
    //     urlProject: "",
    //     urlDemo: "",
    //     preview: ,
    // },
    {
        caption: "https://github.com/maxzz/red3-path",
        info: "Curve path simplification",
        urlProject: "https://github.com/maxzz/red3-path",
        urlDemo: "https://maxzz.github.io/red3-path",
        preview: red3Path,
    },
];

export const sections: SectionType[] = [
    {
        name: 'UX',
        projects: projectsUx,
    },
    {
        name: 'DP',
        projects: projectsDp,
    },
];
