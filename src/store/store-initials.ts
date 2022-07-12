import { ProjectType, SectionType } from "./store-types";

import previewDropzon from "../assets/pages/dropzone-2022-03-04_15-29-37.png";
import simpleBorderRadius from "../assets/pages/simple-border-radius22-2022-07-08_18-46-46.png";
import red3Curves from "../assets/pages/red3-curves-2021-08-18_3-57-11.png";
import borderRadiusGenerator from "../assets/pages/border-radius-generator-2020-12-18_4-44-41.png";
import red3Path from "../assets/pages/red3-path-2021-09-04_19-45-16.png";
import colorNames22 from "../assets/pages/color-names22-2022-06-02_3-49-34.png";
import svgPath from "../assets/pages/svg-path-2022-02-03_14-18-21-sub-paths.png";

export const projectsDp: ProjectType[] = [
    {
        caption: "PMIT",
        description: "Password manager investigation tool as an experiment with data-driven user interfaces (D2UI).",
        urlGithub: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
    // {
    //     caption: "",
    //     description: "",
    //     urlGithub: "",
    //     urlDemo: "",
    //     preview: ,
    // },
];

export const projectsUx: ProjectType[] = [
    {
        caption: "color-names22",
        description: "CSS color names selector",
        urlGithub: "https://github.com/maxzz/color-names22",
        urlDemo: "https://maxzz.github.io/color-names22",
        preview: colorNames22,
    },
    {
        caption: "simple-border-radius22",
        description: "CSS border radius generator",
        urlGithub: "https://github.com/maxzz/simple-border-radius22",
        urlDemo: "https://maxzz.github.io/simple-border-radius22",
        preview: simpleBorderRadius,
    },
    {
        caption: "border-radius-generator",
        description: "Simplest border radius generator with Vue.js Composition API",
        urlGithub: "https://github.com/maxzz/border-radius-generator",
        urlDemo: "https://maxzz.github.io/border-radius-generator",
        preview: borderRadiusGenerator,
    },
    {
        caption: "red3-curves",
        description: "Examination of the curves D3",
        urlGithub: "https://github.com/maxzz/red3-curves",
        urlDemo: "https://maxzz.github.io/red3-curves",
        preview: red3Curves,
    },
    {
        caption: "red3-path",
        description: "Curve path simplification",
        urlGithub: "https://github.com/maxzz/red3-path",
        urlDemo: "https://maxzz.github.io/red3-path",
        preview: red3Path,
    },
    {
        caption: "svg-path",
        description: "SVG path exploration",
        urlGithub: "https://github.com/maxzz/svg-path",
        urlDemo: "https://maxzz.github.io/svg-path",
        preview: svgPath,
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
