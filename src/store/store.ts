import { atom, PrimitiveAtom } from "jotai";
import { atomFamily } from 'jotai/utils';

const AtomFactory = (initialValue: boolean = false) => {
    const map: Record<string, PrimitiveAtom<boolean>> = {};
    return (name: string) => {
        if (!map[name]) {
            map[name] = atom(initialValue);
        }
        return map[name];
    };
};

export const sectionOpenAtoms = AtomFactory();
