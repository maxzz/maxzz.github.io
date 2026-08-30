"use client" //https://motion.dev/docs/react-use-animation-frame

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

export function UseAnimationFrame() {
    const ref = useRef<HTMLDivElement>(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`

        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;

            scale: 0.3;

            --hue-1-transparent: hsl(0, 100%, 50%, 0.6);
            --hue-2-transparent: hsl(60, 100%, 50%, 0.6);
            --hue-3-transparent: hsl(120, 100%, 50%, 0.6);
            --hue-4-transparent: hsl(180, 100%, 50%, 0.6);
            --hue-5-transparent: hsl(240, 100%, 50%, 0.6);
            --hue-6-transparent: hsl(300, 100%, 50%, 0.6);
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            /* background-color: red; */
            opacity: 0.6;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: var(--hue-1-transparent);
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: var(--hue-2-transparent);
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: var(--hue-3-transparent);
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: var(--hue-4-transparent);
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background-color: var(--hue-5-transparent);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background-color: var(--hue-6-transparent);
        }

    `}</style>
    )
}
