import { atom, Getter, PrimitiveAtom } from "jotai";
import debounce from "@/utils/debounce";
import { atomWithCallback } from "@/hooks/atomsX";

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

const AtomsFamily = <T>(initialValues: Record<string, T>, atomInitialValue: T, initAtom: (param: T) => PrimitiveAtom<T>) => {
    let map = valuesToAtoms(initialValues);
    
    const getAtom = (key: string) => {
        let value = map.get(key);
        if (!value) {
            value = initAtom(atomInitialValue);
            map.set(key, value);
        }
        return value;
    };

    function valuesToAtoms(newMap: Record<string, T>) {
        return new Map((Object.entries(newMap || {}).map(([key, value]) => [key, initAtom(value)])));
    }

    function atomsToValues(get: Getter): Record<string, T> {
        return Object.fromEntries([...map.entries()].map(([key, atom]) => [key, get(atom)]));
    }

    getAtom.setValues = valuesToAtoms;
    getAtom.getValues = atomsToValues;
    return getAtom;
};

export const sectionOpenAtoms = AtomsFamily<boolean>(Storage.initialData.openSections, false, (param: boolean) => atomWithCallback(param, Storage.save));
