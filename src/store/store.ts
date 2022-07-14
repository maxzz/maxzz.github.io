import { atom, Getter, PrimitiveAtom } from "jotai";
import debounce from "@/utils/debounce";

//#region LocalStorage

namespace Storage {
    const KEY = 'react-maxzz-io-01';

    type Store = {
        open: {
            source: boolean;
        };
    };

    export let initialData: Store = {
        open: {
            source: false,
        },
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
            open: {
                source: get(sourceAtom),
            },
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

//#endregion LocalStorage

export const sourceAtom = atom<boolean>(false);

const AtomsFamily = <T extends boolean>(initialValue: T) => {
    const map: Record<string, PrimitiveAtom<T>> = {};
    return (name: string) => {
        if (!map[name]) {
            map[name] = atom(initialValue);
        }
        return map[name];
    };
};

export const sectionOpenAtoms = AtomsFamily<boolean>(false);

//////

const AtomsFamily2 = <T>(initialValue: T, initAtom: (param: T) => PrimitiveAtom<T>) => {
    let map = new Map<string, PrimitiveAtom<T>>();
    
    const getAtom = (key: string) => {
        let value = map.get(key);
        if (!value) {
            value = initAtom(initialValue);
            map.set(key, value);
        }
        return value;
    };

    getAtom.setValues = (newMap: Record<string, T>) => {
        const entries = Object.entries(newMap || {});
        map = new Map((entries.map(([key, value]) => [key, initAtom(value)])));
    }

    getAtom.getValues = (get: Getter): Record<string, T> => {
        const entries = map.entries();
        const rv: Record<string, T> = {};
        for (const [key, value] of entries) {
            rv[key] = get(value);
        }
        return rv;
    }

    return getAtom;
};

export const sectionOpenAtoms2 = AtomsFamily2<boolean>(false, (param: boolean) => atom(param));
