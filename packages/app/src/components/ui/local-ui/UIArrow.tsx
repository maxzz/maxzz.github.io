import { type SVGAttributes, useEffect } from "react";
import { classNames } from "@/utils";
import { motion, useSpring, useTransform } from "motion/react";

const closedPath = "M 50 13 L 80 43 L 50 72";
const midPath = "M 50 13 L 50 42 L 50 72";
const openPath = "M 80 35 L 50 65 L 20 35";

export function UIArrow({ open, className, ...rest }: { open: boolean; } & SVGAttributes<SVGSVGElement>) {
    const progress = useSpring(open ? 1 : 0, { mass: 0.2, stiffness: 492, bounce: 0 });
    const d = useTransform(progress, [0, 0.3, 1], [closedPath, midPath, openPath]);

    useEffect(() => {
        progress.set(open ? 1 : 0);
    }, [open, progress]);

    return (
        <svg className={classNames("stroke-current stroke-[.6rem] fill-transparent", className)} viewBox="0 0 100 100" {...rest}>
            <motion.path d={d} />
        </svg>
    );
}
