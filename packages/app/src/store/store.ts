import { type Getter } from "jotai";
import { Atomize, atomsFamily, atomWithCallback, debounce } from "@/utils";

type UIOptions = {
    showType: ShowType;
};

export type ShowType = typeof showType[keyof typeof showType];

export const showType = {
    list: 0,
    preview: 1,
} as const;

//#region LocalStorage

//namespace Storage {
    const KEY = 'maxzz-io-01';

    type Store = {
        uiOptions: UIOptions;
        openSections: Record<string, boolean>;
    };

    export let initialData: Store = {
        uiOptions: {
            showType: showType.preview,
        },
        openSections: {},
    };

    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                initialData = { ...initialData, ...obj };
            } catch (error) {
            }
        }

        //initialData.vaultData.shapes = initialData.vaultData?.shapes?.length ? initialData.vaultData.shapes : defaultShapes;
    }
    load();

    export const saveDebounced = debounce(function _save(get: Getter) {
        let newStore: Store = {
            uiOptions: {
                showType: get(uiOptionsAtoms.showTypeAtom),
            },
            openSections: sectionOpenAtoms.getValues(get),
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => saveDebounced(get);
//}

//#endregion LocalStorage

export const sectionOpenAtoms = atomsFamily<boolean>(initialData.openSections, false, (param: boolean) => atomWithCallback(param, save));

//////////

export const uiOptionsAtoms: Atomize<UIOptions> = {
    showTypeAtom: atomWithCallback(initialData.uiOptions.showType, save),
};
