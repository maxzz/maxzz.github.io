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

type ProjectTitleProps = {
    caption: string;
    info: string;
    url: string;
    preview: string;
};

const projectsList: ProjectTitleProps[] = [
    {
        caption: "Password manager investigation tool (PMIT)",
        info: "Experimenting with Data-Driven User Interfaces (D2UI).",
        url: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
    {
        caption: "Password manager investigation tool (PMIT)",
        info: "Experimenting with Data-Driven User Interfaces (D2UI).",
        url: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
    {
        caption: "Password manager investigation tool (PMIT)",
        info: "Experimenting with Data-Driven User Interfaces (D2UI).",
        url: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
    {
        caption: "Password manager investigation tool (PMIT)",
        info: "Experimenting with Data-Driven User Interfaces (D2UI).",
        url: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
    {
        caption: "Password manager investigation tool (PMIT)",
        info: "Experimenting with Data-Driven User Interfaces (D2UI).",
        url: "https://maxzz.github.io/dropzone",
        preview: previewDropzon,
    },
];

function ProjectTitle({ url, preview, caption, info }: ProjectTitleProps) {
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
        <header className="p-4 text-3xl uppercase">Fresh start</header>
    );
}

function App() {
    return (<>
        <PopperRoot />
        <div className="min-h-full overflow-hidden text-slate-100 bg-slate-900">
            <div className="h-screen flex flex-col">
                <Header />

                <main className="mx-4 flex-1 flex flex-col justify-evenly overflow-y-auto">
                    {projectsList.map((project, idx) => (
                        <ProjectTitle {...project} key={idx} />
                    ))}
                </main>
            </div>
        </div>
    </>);
}

export default App;
