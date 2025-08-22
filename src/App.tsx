import { Section1_Header, Section2_Main, Section3_Footer } from './components';
import { UISymbolDefs } from './components/ui/icons/symbols';

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

//05.12.25
//TODO: add deepwiki.com support like: https://deepwiki.com/maxzz/pmat24-lite

//06.16.25
//TODO: add support for pm-manifest-icons-test
//      https://github.com/maxzz/pm-manifest-icons-test
//      C:/Y/w/2-web/0-dp/utils/pm-manifest-icons-test

//07.18.25
//TODO: add support for
//      https://github.com/maxzz/page-extension-installation
//      C:\y\w\2-web\0-stack\4-components\tm-react-popper-tooltip

//07.19.25
//TODO: add support for
//     https://github.com/maxzz/electron-vite-v4-2025
//     C:\y\w\2-web\0-stack\5-electron\electron-vite-v4-2025