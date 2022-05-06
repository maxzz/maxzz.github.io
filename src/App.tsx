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
                    <section className="p-4 border border-slate-500">1</section>
                    <section className="p-4 border border-slate-500">2</section>
                    <section className="p-4 border border-slate-500">3</section>
                </main>
            </div>
        </div>
    </>);
}

export default App;
