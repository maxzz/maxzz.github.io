import { type Getter } from "jotai";
import { debounce } from "@/utils";
import { Atomize, atomsFamily, atomWithCallback } from "@/hooks/atomsX";

type UIOptions = {
    showType: ShowType;
};

export const enum ShowType {
    list = 0,
    preview,
}

//#region LocalStorage

namespace Storage {
    const KEY = 'maxzz-io-01';

    type Store = {
        uiOptions: UIOptions;
        openSections: Record<string, boolean>;
    };

    export let initialData: Store = {
        uiOptions: {
            showType: ShowType.preview,
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

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

//#endregion LocalStorage

export const sectionOpenAtoms = atomsFamily<boolean>(Storage.initialData.openSections, false, (param: boolean) => atomWithCallback(param, Storage.save));

//////////

export const uiOptionsAtoms: Atomize<UIOptions> = {
    showTypeAtom: atomWithCallback(Storage.initialData.uiOptions.showType, Storage.save),
};
