import { useAtomValue } from 'jotai';
import './App.css';

function PopperRoot() {
    return (
        <div className="absolute z-50">
            <div id="portal"></div>
        </div>
    );
}

import previewDropzon from "./assets/pages/dropzone-2022-03-04_15-29-37.png";
import simpleBorderRadius from "./assets/pages/simple-border-radius22-2022-07-08_18-46-46.png";
import red3Curves from "./assets/pages/red3-curves-2021-08-18_3-57-11.png";
import borderRadiusGenerator from "./assets/pages/border-radius-generator-2020-12-18_4-44-41.png";
import red3Path from "./assets/pages/red3-path-2021-09-04_19-45-16.png";

type ProjectTitleProps = {
    caption: string;
    info: string;
    urlProject: string;
    urlDemo?: string;
    preview: string;
};

const projectsList: ProjectTitleProps[] = [
    {
        caption: "Password manager investigation tool (PMIT)",
        info: "Experimenting with Data-Driven User Interfaces (D2UI)",
        urlProject: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
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

function ProjectTitle({ urlProject: url, preview, caption, info }: ProjectTitleProps) {
    return (
        <section className="p-4 bg-slate-800">
            <a className="flex items-center justify-between space-x-4" href={url} target="_blank">
                <div className="self-start">
                    <div className="hoverurl inline-block">{caption}</div>
                    <div className="">{info}</div>
                </div>
                <div className="flex-none w-24 h-auto"><img src={preview} alt="" /></div>
            </a>
        </section>
    );
}

function Header() {
    return (
        <header className="p-4 text-3xl bg-black uppercase shadow-sm shadow-slate-700">Fresh start</header>
    );
}

function App() {
    return (<>
        <PopperRoot />
        <div className="min-h-full overflow-hidden text-slate-100 bg-slate-900">
            <div className="h-screen flex flex-col">
                <Header />

                <main className="flex-1 overflow-hidden">
                    <div className="m-auto max-w-xl h-full flex flex-col justify-evenly space-y-2 overflow-y-auto">
                        {projectsList.map((project, idx) => (
                            <ProjectTitle {...project} key={idx} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    </>);
}

export default App;
