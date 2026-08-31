import { Section1_Header } from "../1-header";
import { Section2_Main } from "../2-main/0-all";
import { Section3_Footer } from "../3-footer";
import { Toaster } from "../ui/shadcn/sonner";
import { UISymbolDefs } from "../ui/icons/symbols";

export function App() {
    return (<>
        <PopperRoot />
        <UISymbolDefs />
        <Toaster /> {/* can use these props: expand visibleToasts={5} */}
        
        <div className="h-screen min-h-full text-slate-100 bg-slate-900 overflow-hidden flex flex-col"> {/* debug-screens */}
            <Section1_Header />

            <main className="flex-1 my-4 overflow-y-overlay space-y-4 smallscroll">
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
