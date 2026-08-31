import { classNames } from "@/utils/classnames";

export const frameClasses = "py-2 border border-primary-400/50 rounded-lg";

export function buttonClasses(isAnimating: boolean): string {
    const rvClasses = classNames("px-3 py-1.5 text-xs font-light rounded-sm transition-all duration-200",
        isAnimating
            ? 'bg-primary-600/50 text-primary-400 cursor-not-allowed'
            : 'bg-primary-700 hover:bg-primary-600 text-white cursor-pointer'
    );
    return rvClasses;
}
