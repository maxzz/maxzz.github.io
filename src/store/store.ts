import { atom, Getter, PrimitiveAtom } from "jotai";
import debounce from "@/utils/debounce";

//#region LocalStorage

namespace Storage {
    const KEY = 'react-maxzz-io-01';

    type Store = {
        open: {
            source: boolean;
        }
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


const AtomFactory = (initialValue: boolean = false) => {
    const map: Record<string, PrimitiveAtom<boolean>> = {};
    return (name: string) => {
        if (!map[name]) {
            map[name] = atom(initialValue);
        }
        return map[name];
    };
};

export const sourceAtom = atom<boolean>(false);

export const sectionOpenAtoms = AtomFactory();
