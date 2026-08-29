import { getDefaultStore } from "jotai";
import { toast } from "sonner";
import { type ProjectType } from "@maxzz/db-apps";
import { PrivateRepoNoticeToast } from "./2-toast-content";
import { privateRepoNoticeAtom } from "./a-atoms-toast";

export function requestPrivateRepoNotice(project: ProjectType) {
    getDefaultStore().set(privateRepoNoticeAtom, { project, nonce: Date.now() });

    toast.custom(
        (toastId) => <PrivateRepoNoticeToast project={project} toastId={toastId} />,
        {
            duration: 3000,
            unstyled: true,
        },
    );
}
