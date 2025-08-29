import { Section1_Header, Section2_Main, Section3_Footer } from '..';
import { UISymbolDefs } from '../ui/icons/symbols';

export function App() {
    return (<>
        <PopperRoot />
        <UISymbolDefs />
        <div className="h-screen min-h-full overflow-hidden text-slate-100 bg-slate-900 flex flex-col"> {/* debug-screens */}
            <Section1_Header />

            <main className="flex-1 my-4 space-y-4 overflow-y-overlay smallscroll">
                <Section2_Main />
            </main>

            <Section3_Footer />
        </div>
    </>);
}

function PopperRoot() {
    return (
        <div className="absolute z-50">
            <div id="portal"></div>
        </div>
    );
}
