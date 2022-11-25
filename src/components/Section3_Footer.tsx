import React, { HTMLAttributes } from 'react';
import { classNames } from '@/utils/classnames';
import { IconSunnyvale } from './UI/Icons/UIIcons';

export function Section3_Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("h-12 text-xs bg-black text-slate-600 flex items-center justify-center", className)} {...rest}>
            <p>Created by Max Zakharzhevskiy.</p>
            <IconSunnyvale className="w-5 h-5" />
            <p>Open sourced on <a className="underline" href="https://github.com/maxzz/maxzz.github.io" target="_blank" rel="noopener">Github</a>.</p>
        </div>
    );
}
