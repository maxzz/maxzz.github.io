import { Section1_Header } from './components/1-header';
import { Section2_Main } from './components/2-main';
import { Section3_Footer } from './components/3-footer';
import { UISymbolDefs } from './components/UI/Icons/symbols';

function PopperRoot() {
    return (
        <div className="absolute z-50">
            <div id="portal"></div>
        </div>
    );
}

export function App() {
    return (<>
        <PopperRoot />
        <UISymbolDefs />
        <div className="min-h-full overflow-hidden text-slate-100 bg-slate-900"> {/* debug-screens */}
            <div className="h-screen flex flex-col">
                <Section1_Header />
                <Section2_Main />
                <Section3_Footer />
            </div>
        </div>
    </>);
}

//TODO: optimize icons to local font
//TODO: load project preview image in show grid mode only for open section
