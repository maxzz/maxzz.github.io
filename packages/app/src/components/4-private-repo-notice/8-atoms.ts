import { atom, getDefaultStore } from "jotai";
import { type ProjectType } from "@maxzz/db-apps";

export type PrivateRepoNotice = {
    project: ProjectType;
    nonce: number;
};

export const privateRepoNoticeAtom = atom<PrivateRepoNotice | null>(null);

export function requestPrivateRepoNotice(project: ProjectType) {
    getDefaultStore().set(privateRepoNoticeAtom, { project, nonce: Date.now() });
}
