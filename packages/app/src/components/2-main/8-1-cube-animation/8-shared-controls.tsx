import { classNames } from "@/utils/classnames";

export const frameClasses = "pt-2 pb-3 border border-primary-400/50 rounded-lg";

export function buttonAnimatingClasses(isAnimating: boolean): string {
    const rvClasses = classNames("px-2 py-1 text-xs font-light rounded-sm transition-all duration-200",
        isAnimating
            ? 'bg-primary-600/50 text-primary-500 cursor-not-allowed'
            : 'bg-primary-700 hover:bg-primary-600 text-white cursor-pointer'
    );
    return rvClasses;
}

export const buttonClasses = "p-1 font-light rounded-sm bg-primary-700 hover:bg-primary-600 text-white";
export const iconClasses = "size-3";