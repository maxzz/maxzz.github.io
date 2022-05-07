import { useAtomValue } from 'jotai';
import './App.css';

function PopperRoot() {
    return (
        <div className="absolute z-50">
            <div id="portal"></div>
        </div>
    );
}

function App() {
    return (<>
        <PopperRoot />
        <div className="min-h-full overflow-hidden text-slate-100 bg-slate-900">
            <div className="h-screen flex flex-col">
                <header className="p-4 text-3xl uppercase">Fresh start</header>
                <main className="mx-4 flex-1 flex flex-col justify-evenly">

                    <section className="p-4 bg-slate-800">
                        <a className="flex items-center justify-between space-x-4" href="https://maxzz.github.io/dropzone" target="_blank">
                            <div className="self-start">
                                <div className="hoverurl">PMIT</div>
                                <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nisi enim veniam illum totam laborum maxime assumenda facere aspernatur voluptatum a nihil dicta officia, suscipit dignissimos voluptatibus repudiandae inventore veritatis?</div>
                            </div>
                            <div className="flex-none w-24 h-auto"><img src="src/assets/pages/dropzone-2022-03-04_15-29-37.png" alt="" /></div>
                        </a>
                    </section>
                    
                    <section className="p-4 bg-slate-800">2</section>
                    <section className="p-4 bg-slate-800">3</section>
                </main>
            </div>
        </div>
    </>);
}

export default App;
