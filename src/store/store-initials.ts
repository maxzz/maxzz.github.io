import { ProjectType, SectionType } from "./store-types";

//import previewDropzon from "@/assets/pages/dropzone-2022-03-04_15-29-37.png";
import simpleBorderRadius from "@/assets/pages/simple-border-radius22-2022-07-08_18-46-46.png";
import red3Curves from "@/assets/pages/red3-curves-2021-08-18_3-57-11.png";
import borderRadiusGenerator from "@/assets/pages/border-radius-generator-2020-12-18_4-44-41.png";
import red3Path from "@/assets/pages/red3-path-2021-09-04_19-45-16.png";
import colorNames22 from "@/assets/pages/color-names22-2022-06-02_3-49-34.png";
import testPmDomainLogins22 from "@/assets/pages/test-pm-domain-logins22-2022-06-29_1-32-01.png";
import svgPath from "@/assets/pages/svg-path-2022-02-03_14-18-21-sub-paths.png";

//const previewDropzon = (await import("@/assets/pages/dropzone-2022-03-04_15-29-37.png?preset=thumbnail")).default;
import previewDropzon from '../assets/pages/test-pm-domain-logins22-2022-06-29_1-32-01.png?preset=thumbnail';

//import srcset from '@/assets/pages/test-pm-domain-logins22-2022-06-29_1-32-01.png?preset=thumbnail';
let srcset = {
    //previewDropzon: (await import("@/assets/pages/dropzone-2022-03-04_15-29-37.png?preset=thumbnail")).default,
    // simpleBorderRadius: (await import("@/assets/pages/simple-border-radius22-2022-07-08_18-46-46.png?preset=thumbnail")).default,
    // red3Curves: (await import("@/assets/pages/red3-curves-2021-08-18_3-57-11.png?preset=thumbnail")).default,
    // borderRadiusGenerator: (await import("@/assets/pages/border-radius-generator-2020-12-18_4-44-41.png?preset=thumbnail")).default,
    // red3Path: (await import("@/assets/pages/red3-path-2021-09-04_19-45-16.png?preset=thumbnail")).default,
    // colorNames22: (await import("@/assets/pages/color-names22-2022-06-02_3-49-34.png?preset=thumbnail")).default,
    // svgPath: (await import("@/assets/pages/svg-path-2022-02-03_14-18-21-sub-paths.png?preset=thumbnail")).default,
    // testPmDomainLogins22: (await import('@/assets/pages/test-pm-domain-logins22-2022-06-29_1-32-01.png?preset=thumbnail')).default,
};

//import srcset from '@/assets/pages/test-pm-domain-logins22-2022-06-29_1-32-01.png&srcset';

//console.log('srcset', srcset);
console.log('previewDropzon', previewDropzon);
//console.log('svgPath', svgPath);

export const projectsDp: ProjectType[] = [
    {
        caption: "PMIT",
        description: "Password manager investigation tool as an experiment with data-driven user interfaces (D2UI).",
        urlGithub: "https://github.com/maxzz/dropzone",
        urlDemo: "https://maxzz.github.io/dropzone",
        //previewUrl: '',
        previewUrl: previewDropzon,
        // previewUrl: "@/assets/pages/dropzone-2022-03-04_15-29-37.png?preset=thumbnail&src",
        // previewUrl: srcset[srcset.length - 1].src || '',
        //previewUrl: srcset.testPmDomainLogins22[srcset.testPmDomainLogins22.length - 1].src || '',
        //previewUrl: srcset.previewDropzon,
    },

    // {
    //     caption: "test-pm-domain-logins22",
    //     description: "Application for testing different login forms and password change in one domain.",
    //     urlGithub: "https://github.com/maxzz/test-pm-domain-logins22",
    //     urlDemo: "https://maxzz.github.io/test-pm-domain-logins22",
    //     // previewUrl: testPmDomainLogins22,
    //     previewUrl: srcset.testPmDomainLogins22,
    // },

    // {
    //     caption: "",
    //     description: "",
    //     urlGithub: "",
    //     urlDemo: "",
    //     previewUrl: ,
    // },
];

export const projectsUx: ProjectType[] = [
    // {
    //     caption: "color-names22",
    //     description: "CSS color names selector",
    //     urlGithub: "https://github.com/maxzz/color-names22",
    //     urlDemo: "https://maxzz.github.io/color-names22",
    //     previewUrl: colorNames22,
    //     localPath: "C:/Y/w/2-web/7-my-webpages/color-names22",
    // },
    // {
    //     caption: "simple-border-radius22",
    //     description: "CSS border radius generator",
    //     urlGithub: "https://github.com/maxzz/simple-border-radius22",
    //     urlDemo: "https://maxzz.github.io/simple-border-radius22",
    //     previewUrl: simpleBorderRadius,
    // },
    // {
    //     caption: "border-radius-generator",
    //     description: "Simplest border radius generator with Vue.js Composition API",
    //     urlGithub: "https://github.com/maxzz/border-radius-generator",
    //     urlDemo: "https://maxzz.github.io/border-radius-generator",
    //     previewUrl: borderRadiusGenerator,
    // },
    // {
    //     caption: "red3-curves",
    //     description: "Examination of the curves D3",
    //     urlGithub: "https://github.com/maxzz/red3-curves",
    //     urlDemo: "https://maxzz.github.io/red3-curves",
    //     previewUrl: red3Curves,
    // },
    // {
    //     caption: "red3-path",
    //     description: "Curve path simplification",
    //     urlGithub: "https://github.com/maxzz/red3-path",
    //     urlDemo: "https://maxzz.github.io/red3-path",
    //     previewUrl: red3Path,
    //     localPath: "C:/Y/w/2-web/1-frameworks/5-d3/react-d3-path/tailwind"
    // },
    // {
    //     caption: "svg-path",
    //     description: "SVG path exploration",
    //     urlGithub: "https://github.com/maxzz/svg-path",
    //     urlDemo: "https://maxzz.github.io/svg-path",
    //     previewUrl: svgPath,
    // },
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
