import { ProjectType, SectionType } from "./store-types";
import * as images from "./store-images";

export const projectsDp: ProjectType[] = [
    {
        caption: "PMIT",
        description: "Password manager investigation tool as an experiment with data-driven user interfaces (D2UI).",
        urlGithub: "https://github.com/maxzz/dropzone",
        urlDemo: "https://maxzz.github.io/dropzone",
        previewUrl: images.previewDropzon,
        localPath: "C:/Y/w/2-web/8-websites-ideas/4-react/dropzone",
    },
    {
        caption: "test-pm-domain-logins22",
        description: "Application for testing different login forms and password change in one domain.",
        urlGithub: "https://github.com/maxzz/test-pm-domain-logins22",
        urlDemo: "https://maxzz.github.io/test-pm-domain-logins22",
        previewUrl: images.testPmDomainLogins22,
        localPath: "C:/Y/w/2-web/0-dp/test-pm-domain-logins22",
    },
    {
        caption: "page-extension-installation",
        description: "Page for installing the DigitalPersona extension.",
        urlGithub: "https://github.com/maxzz/page-extension-installation",
        urlDemo: "https://maxzz.github.io/page-extension-installation",
        previewUrl: images.pageExtensionInstallation,
        localPath: "C:/Y/w/2-web/0-dp/page-extension-installation",
    },
    {
        caption: "test-pm-second",
        description: "Second page for checking logins on the same domain.",
        urlGithub: "https://github.com/maxzz/test-pm-second",
        urlDemo: "https://maxzz.github.io/test-pm-second",
        previewUrl: images.testPmSecond,
        localPath: "C:/Y/w/2-web/0-dp/test-pm-second",
    },

    // {
    //     caption: "",
    //     description: "",
    //     urlGithub: "",
    //     urlDemo: "",
    //     previewUrl: images.editorsSvgShapes22Template,
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
        localPath: "C:/Y/w/2-web/7-my-webpages/simple-border-radius22",
    },
    {
        caption: "border-radius-generator",
        description: "Simplest border radius generator with Vue.js Composition API",
        urlGithub: "https://github.com/maxzz/border-radius-generator",
        urlDemo: "https://maxzz.github.io/border-radius-generator",
        previewUrl: images.borderRadiusGenerator,
        localPath: "C:/Y/w/2-web/7-my-webpages/simple-border-radius",
    },
    {
        caption: "red3-curves",
        description: "Examination of the curves D3",
        urlGithub: "https://github.com/maxzz/red3-curves",
        urlDemo: "https://maxzz.github.io/red3-curves",
        previewUrl: images.red3Curves,
        localPath: "C:/Y/w/2-web/1-frameworks/5-d3/react-d3-lines",
    },
    {
        caption: "red3-path",
        description: "Curve path simplification",
        urlGithub: "https://github.com/maxzz/red3-path",
        urlDemo: "https://maxzz.github.io/red3-path",
        previewUrl: images.red3Path,
        localPath: "C:/Y/w/2-web/1-frameworks/5-d3/react-d3-path/tailwind",
    },
    {
        caption: "svg-path",
        description: "SVG path exploration",
        urlGithub: "https://github.com/maxzz/svg-path",
        urlDemo: "https://maxzz.github.io/svg-path",
        previewUrl: images.svgPath,
        localPath: "C:/Y/w/2-web/8-websites-ideas/4-react/svg-path",
    },
    {
        caption: "ngon-gen22",
        description: "N-gon generator.",
        urlGithub: "https://github.com/maxzz/ngon-gen22",
        urlDemo: "https://maxzz.github.io/ngon-gen22",
        previewUrl: images.ngonGen22,
        localPath: "C:/Y/w/2-web/7-my-webpages/editors-svg-shapes22",
    },
    {
        caption: "ngon-gen22-template",
        description: "Template for React, Jotai, TailwindCSS app",
        urlGithub: "https://github.com/maxzz/ngon-gen22-template",
        urlDemo: "https://maxzz.github.io/ngon-gen22",
        previewUrl: images.editorsSvgShapes22Template,
        localPath: "C:/Y/w/2-web/7-my-webpages/editors-svg-shapes22-template",
    },

    {
        caption: "leva-ui-dynamic-boxes",
        description: "Experimenting with box resizing handles using leva and zustand.",
        urlGithub: "https://github.com/maxzz/leva-ui-dynamic-boxes",
        urlDemo: "https://maxzz.github.io/leva-ui-dynamic-boxes",
        previewUrl: images.levaUiDynamicBoxes,
        localPath: "C:/Y/w/2-web/7-my-webpages/leva-ui-dynamic-boxes",
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
