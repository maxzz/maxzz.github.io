import { getDefaultStore } from "jotai";
import { toast } from "sonner";
import { type ProjectType } from "@maxzz/db-apps";
import { PrivateRepoNoticeToast } from "./1-toast-content";
import { privateRepoNoticeAtom } from "./8-atoms";

export function requestPrivateRepoNotice(project: ProjectType) {
    getDefaultStore().set(privateRepoNoticeAtom, { project, nonce: Date.now() });

    toast.custom(
        (toastId) => <PrivateRepoNoticeToast project={project} toastId={toastId} />,
        {
            duration: 5000,
            unstyled: true,
        },
    );
}
