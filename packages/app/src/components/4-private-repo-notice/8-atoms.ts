import { atom } from "jotai";
import { type ProjectType } from "@maxzz/db-apps";

export type PrivateRepoNotice = {
    project: ProjectType;
    nonce: number;
};

export const privateRepoNoticeAtom = atom<PrivateRepoNotice | null>(null);
