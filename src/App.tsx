import { Section1_Header } from './components/Section1_Header';
import { Section2_Main } from './components/Section2_Main';
import { Section3_Footer } from './components/Section3_Footer';
import { UISymbolDefs } from './components/UI/UIIconSymbols';

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

export default App;
