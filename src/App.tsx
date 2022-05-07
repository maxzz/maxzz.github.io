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
    url: string;
    preview: string;
    caption: string;
    info: string;
};

function ProjectTitle({ url, preview, caption, info }: ProjectTitleProps) {
    return (
        <section className="p-4 bg-slate-800">
            <a className="flex items-center justify-between space-x-4" href={url} target="_blank">
                <div className="self-start">
                    <div className="hoverurl">{caption}</div>
                    <div className="">{info}</div>
                </div>
                <div className="flex-none w-24 h-auto"><img src={preview} alt="" /></div>
            </a>
        </section>
    );
}

function App() {
    return (<>
        <PopperRoot />
        <div className="min-h-full overflow-hidden text-slate-100 bg-slate-900">
            <div className="h-screen flex flex-col">
                <header className="p-4 text-3xl uppercase">Fresh start</header>
                <main className="mx-4 flex-1 flex flex-col justify-evenly">
                    <ProjectTitle
                        url="https://maxzz.github.io/dropzone"
                        preview={previewDropzon}
                        caption="PMIT"
                        info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nisi enim veniam illum totam laborum maxime assumenda facere aspernatur voluptatum a nihil dicta officia, suscipit dignissimos voluptatibus repudiandae inventore veritatis?"
                    />

                    <section className="p-4 bg-slate-800">2</section>
                    <section className="p-4 bg-slate-800">3</section>
                </main>
            </div>
        </div>
    </>);
}

export default App;
