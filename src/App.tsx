import { Section1_Head } from './components/Section1_Head';
import { Section2_Main } from './components/Section2_Main';
import { Section3_Footer } from './components/Section3_Footer';
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
                <Section1_Head />
                <Section2_Main />
                <Section3_Footer />
            </div>
        </div>
    </>);
}

export default App;
