import { ProjectType } from "../store-types";
import * as images from "./store-images";

export const projectsDp: ProjectType[] = [
    {
        primary: 'DP',
        id: "PMIT",
        description: "Password manager investigation tool as an experiment with data-driven user interfaces (D2UI).",
        urlGithub: "https://github.com/maxzz/dropzone",
        urlDemo: "https://maxzz.github.io/dropzone",
        urlPreview: images.previewDropzon,
        localPath: "C:/Y/w/2-web/8-websites-ideas/4-react/dropzone",
        stack: ['react', 'jotai', 'tw'],
    },
    {
        primary: 'DP',
        id: "PMAC", // former: pm-domain-credentials-switch
        description: "Password manager administrator command. Utility to convert PM domain credentials to credentials that only apply to the exact URL.",
        urlGithub: "https://github.com/maxzz/pmac",
        urlDemo: "https://maxzz.github.io/pmac",
        urlPreview: images.npm,
        localPath: "C:/Y/w/2-web/0-dp/utils/pmac",
        stack: ['npm', 'ts', 'tw'],
    },
    {
        primary: 'DP',
        id: "page-qa2",
        description: "QA information website",
        urlGithub: "https://github.com/maxzz/page-qa2",
        urlDemo: "https://maxzz.github.io/page-qa2",
        urlPreview: images.pageQa2,
        localPath: "C:/Y/w/2-web/0-dp/page-qa2",
        stack: ['react', 'jotai', 'tw'],
    },
    {
        primary: 'DP',
        id: "page-extension-installation",
        description: "Page for installing the DigitalPersona extension.",
        urlGithub: "https://github.com/maxzz/page-extension-installation",
        urlDemo: "https://maxzz.github.io/page-extension-installation",
        urlPreview: images.pageExtensionInstallation,
        localPath: "C:/Y/w/2-web/0-dp/page-extension-installation",
        stack: ['react', 'jotai', 'tw'],
    },
    {
        primary: 'DP',
        id: "test-pm",
        description: "Dynamic webpage to test Password Manager login and password change screens.",
        urlGithub: "https://github.com/maxzz/test-pm",
        urlDemo: "https://maxzz.github.io/test-pm",
        urlPreview: images.testPm,
        localPath: "C:/Y/w/2-web/0-dp/test-pm",
        stack: ['vue', 'css'],
    },
    {
        primary: 'DP',
        id: "test-pm-second",
        description: "Second page for checking logins on the same domain.",
        urlGithub: "https://github.com/maxzz/test-pm-second",
        urlDemo: "https://maxzz.github.io/test-pm-second",
        urlPreview: images.testPmSecond,
        localPath: "C:/Y/w/2-web/0-dp/test-pm-second",
        stack: ['react', 'jotai', 'tw'],
    },
    {
        primary: 'DP',
        id: "test-pm-domain-logins",
        description: "Test multiple logins under the same domain.",
        urlGithub: "https://github.com/maxzz/test-pm-domain-logins",
        urlDemo: "https://maxzz.github.io/test-pm-domain-logins/",
        urlPreview: images.testPmDomainLogins,
        localPath: "C:/Y/w/2-web/0-dp/test-pm-domain-logins",
        stack: ['vue', 'css'],
    },
    {
        primary: 'DP',
        id: "test-pm-domain-logins22",
        description: "Application for testing different login forms and password change in one domain.",
        urlGithub: "https://github.com/maxzz/test-pm-domain-logins22",
        urlDemo: "https://maxzz.github.io/test-pm-domain-logins22",
        urlPreview: images.testPmDomainLogins22,
        localPath: "C:/Y/w/2-web/0-dp/test-pm-domain-logins22",
        stack: ['react', 'jotai', 'tw'],
    },
    {
        primary: 'DP',
        id: "pmat-manual-mode",
        description: "Prototype of the PMAT manual mode editor.",
        urlGithub: "https://github.com/maxzz/pmat-manual-mode",
        urlDemo: "https://maxzz.github.io/pmat-manual-mode", // no demo
        urlPreview: images.npm, // no img
        localPath: "c:/Y/w/2-web/0-dp/pmat-manual-mode",
        stack: ['react', 'jotai', 'tw'],
    },
    {
        primary: 'DP',
        id: "pm-xtn-csui-test-vanilla",
        description: "Test application for pm-xtn-csui.",
        urlGithub: "https://github.com/maxzz/pm-xtn-csui-test-vanilla",
        urlDemo: "https://maxzz.github.io/pm-xtn-csui-test-vanilla", // no demo
        urlPreview: images.npm, // no img
        localPath: "c:/Y/w/2-web/0-dp/utils/pm-xtn-csui-test-vanilla",
        stack: ['js'],
    },
];
