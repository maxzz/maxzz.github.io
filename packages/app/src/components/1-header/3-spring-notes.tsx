import { a, easings, useSpring } from "@react-spring/web";
import { IconExperiments } from "../ui";

export function SpringNotes() {

    const styles = useSpring({
        from: {
            x: 400,
            opacity: 0,
            scaley: 0,
            transformOrigin: 'left bottom'
        },
        to: [
            {
                x: 0,
                opacity: 1,
                scaley: .2,
                delay: 1000,
                config: { duration: 200 },
            },
            {
                scaley: 1,
                delay: 200,
                config: { duration: 1200, easing: easings.easeOutBounce },
            },
        ],
    });

    return (
        <a.div style={styles}>
            <a className="inline-block translate-y-px space-x-1" href="https://github.com/maxzz" target="_blank" title="Open Max's GitHub">
                <span className="text-[.65rem] leading-[.65rem] sm:text-sm">
                         // todo: name to come up with
                </span>

                <IconExperiments className="pb-0.5 w-4 h-4 origin-bottom scale-75 sm:scale-125 stroke-slate-400 inline-block" />
            </a>
        </a.div>
    );
}
