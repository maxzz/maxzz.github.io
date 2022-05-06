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
        <div className="min-h-full overflow-hidden bg-slate-50">
            <div className="">Fresh start</div>
        </div>
    </>);
}

export default App;
