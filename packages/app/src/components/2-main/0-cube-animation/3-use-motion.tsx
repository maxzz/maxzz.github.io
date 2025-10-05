import { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";

export function ListAnimation() {
    // 1. Get the `scope` and `animate` function from useAnimate
    const [scope, animate] = useAnimate();

    useEffect(() => {
        // 2. Call the animate function with a sequence
        //    The async function ensures that each animation step completes before the next one starts
        async function sequence() {
            // Step 1: Animate the list title
            await animate("h1", { opacity: 1, y: 0 }, { duration: 0.5 });

            // Step 2: Animate the list items with a stagger effect
            animate("li", { opacity: 1, x: 0 }, { delay: staggerItems });
        }

        sequence();
    }, []);

    return (
        // 3. Attach the scope ref to the parent element
        <div ref={scope}>
            <h1 className="list-title">Loading...</h1>
            <ul className="list">
                <li className="list-item">1</li>
                <li className="list-item">1</li>
                <li className="list-item">1</li>
            </ul>
        </div>
    );
}

const staggerItems = stagger(0.1, { startDelay: 0.25 });

// gai: 'what to use instead of deprecated LegacyAnimationControls in framer-motion'
// 	'is framer-motion function  useAnimationControls deprecated?' <- Yes, the useAnimationControls function has been deprecated and replaced by the useAnimate hook in Framer Motion.
// 		'Show me an example of useAnimate with timelines'
