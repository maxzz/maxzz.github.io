import { ProjectType, SectionType } from "./store-types";
import * as images from "./store-images";

export const projectsDp: ProjectType[] = [
    {
        caption: "PMIT",
        description: "Password manager investigation tool as an experiment with data-driven user interfaces (D2UI).",
        urlGithub: "https://github.com/maxzz/dropzone",
        urlDemo: "https://maxzz.github.io/dropzone",
        previewUrl: images.previewDropzon,
    },
    {
        caption: "test-pm-domain-logins22",
        description: "Application for testing different login forms and password change in one domain.",
        urlGithub: "https://github.com/maxzz/test-pm-domain-logins22",
        urlDemo: "https://maxzz.github.io/test-pm-domain-logins22",
        previewUrl: images.testPmDomainLogins22,
    },

    // {
    //     caption: "",
    //     description: "",
    //     urlGithub: "",
    //     urlDemo: "",
    //     previewUrl: ,
    //     localPath: "",
    // },
];

export const projectsUx: ProjectType[] = [
    {
        caption: "color-names22",
        description: "CSS color names selector",
        urlGithub: "https://github.com/maxzz/color-names22",
        urlDemo: "https://maxzz.github.io/color-names22",
        previewUrl: images.colorNames22,
        localPath: "C:/Y/w/2-web/7-my-webpages/color-names22",
    },
    {
        caption: "simple-border-radius22",
        description: "CSS border radius generator",
        urlGithub: "https://github.com/maxzz/simple-border-radius22",
        urlDemo: "https://maxzz.github.io/simple-border-radius22",
        previewUrl: images.simpleBorderRadius,
    },
    {
        caption: "border-radius-generator",
        description: "Simplest border radius generator with Vue.js Composition API",
        urlGithub: "https://github.com/maxzz/border-radius-generator",
        urlDemo: "https://maxzz.github.io/border-radius-generator",
        previewUrl: images.borderRadiusGenerator,
    },
    {
        caption: "red3-curves",
        description: "Examination of the curves D3",
        urlGithub: "https://github.com/maxzz/red3-curves",
        urlDemo: "https://maxzz.github.io/red3-curves",
        previewUrl: images.red3Curves,
    },
    {
        caption: "red3-path",
        description: "Curve path simplification",
        urlGithub: "https://github.com/maxzz/red3-path",
        urlDemo: "https://maxzz.github.io/red3-path",
        previewUrl: images.red3Path,
        localPath: "C:/Y/w/2-web/1-frameworks/5-d3/react-d3-path/tailwind"
    },
    {
        caption: "svg-path",
        description: "SVG path exploration",
        urlGithub: "https://github.com/maxzz/svg-path",
        urlDemo: "https://maxzz.github.io/svg-path",
        previewUrl: images.svgPath,
    },
];

export const sections: SectionType[] = [
    {
        name: 'UX',
        projects: projectsUx,
    },
    {
        name: 'DigitalPersona',
        projects: projectsDp,
    },
];
