import { atom, Getter, PrimitiveAtom } from "jotai";
import debounce from "@/utils/debounce";
import { atomsFamily, atomWithCallback } from "@/hooks/atomsX";

//#region LocalStorage

namespace Storage {
    const KEY = 'maxzz-io-01';

    type Store = {
        openSections: Record<string, boolean>;
    };

    export let initialData: Store = {
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
            openSections: sectionOpenAtoms.getValues(get),
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

//#endregion LocalStorage

export const sourceAtom = atom<boolean>(false);

//////

export const sectionOpenAtoms = atomsFamily<boolean>(Storage.initialData.openSections, false, (param: boolean) => atomWithCallback(param, Storage.save));
