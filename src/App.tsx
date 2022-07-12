import { useAtomValue } from 'jotai';
import './App.css';
import { ProjectTitleProps } from './store/store-types';
import { projectsList } from './store/store-initials';

function PopperRoot() {
    return (
        <div className="absolute z-50">
            <div id="portal"></div>
        </div>
    );
}

function ProjectTile({ urlProject: url, preview, caption, info }: ProjectTitleProps) {
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
                            <ProjectTile {...project} key={idx} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    </>);
}

export default App;
