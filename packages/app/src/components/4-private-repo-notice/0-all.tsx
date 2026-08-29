import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/shadcn/sonner";
import { PrivateRepoNoticeToast } from "./1-toast-content";
import { privateRepoNoticeAtom } from "./8-atoms";

export function PrivateRepoNoticeHost() {
    const notice = useAtomValue(privateRepoNoticeAtom);

    useEffect(() => {
        if (!notice) {
            return;
        }

        toast.custom(
            () => <PrivateRepoNoticeToast />,
            {
                id: `private-repo-${notice.project.id}`,
                duration: 5000,
                unstyled: true,
            },
        );
    }, [notice]);

    return <Toaster />;
}
