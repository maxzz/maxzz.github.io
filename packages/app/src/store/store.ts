import { type Getter } from "jotai";
import { Atomize, atomsFamily, atomWithCallback, debounce } from "@/utils";

export const ShowType = {
    list: 0,
    preview: 1,
} as const;

export type ShowType = typeof ShowType[keyof typeof ShowType];

type UIOptions = {
    showType: ShowType;
};

//#region LocalStorage

const STORAGE_KEY = 'maxzz-io-01';

type Store = {
    uiOptions: UIOptions;
    openSections: Record<string, boolean>;
};

function loadInitialData(): Store {
    const defaults: Store = {
        uiOptions: {
            showType: ShowType.preview,
        },
        openSections: {},
    };

    const s = localStorage.getItem(STORAGE_KEY);
    if (s) {
        try {
            const obj = JSON.parse(s) as Store;
            return { ...defaults, ...obj };
        } catch (error) {
        }
    }

    return defaults;
}

const initialData = loadInitialData();

const saveDebounced = debounce(function _save(get: Getter) {
    const newStore: Store = {
        uiOptions: {
            showType: get(uiOptionsAtoms.showTypeAtom),
        },
        openSections: sectionOpenAtoms.getValues(get),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStore));
}, 1000);

const save = ({ get }: { get: Getter; }) => saveDebounced(get);

//#endregion LocalStorage

export const sectionOpenAtoms = atomsFamily<boolean>(initialData.openSections, false, (param: boolean) => atomWithCallback(param, save));

//////////

export const uiOptionsAtoms: Atomize<UIOptions> = {
    showTypeAtom: atomWithCallback(initialData.uiOptions.showType, save),
};
