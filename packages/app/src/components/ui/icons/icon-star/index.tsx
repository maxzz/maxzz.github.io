import { type HTMLAttributes } from "react"; //https://codepen.io/maxzz/pen/LYJwNoq
import { classNames } from "@/utils";
import styles from "./star.module.css";

export function Star({ ...rest }: HTMLAttributes<HTMLElement>) {
    return (
        <div className={`${styles.star} w-4 h-4 [--dur:2.5s]`} {...rest}>
        </div>
    );
}

export function Stars({ className, ...rest }: HTMLAttributes<SVGSVGElement>) { //https://react-icons.github.io/react-icons/icons?name=wi WiStars
    return (
        <svg className={classNames(`[--dur:12.5s]`, className)} viewBox="0 0 30 30" style={{animation: `${styles.starsGroup} var(--dur) ease-in infinite`}} {...rest}>
            <path d="M5.37 16.18c.65-.03 1.2-.28 1.65-.75.45-.47.68-1.03.68-1.68 0 .65.22 1.21.67 1.68.45.47 1 .72 1.65.75-.65.03-1.2.28-1.65.75a2.34 2.34 0 0 0-.67 1.68 2.3 2.3 0 0 0-.68-1.68c-.45-.47-1-.72-1.65-.75zm2.33-7.2a4.6 4.6 0 0 0 3.21-1.47 4.58 4.58 0 0 0 1.32-3.28c0 1.27.44 2.36 1.32 3.28s1.95 1.4 3.22 1.47a4.8 4.8 0 0 0-4.54 4.77 4.6 4.6 0 0 0-1.32-3.29A4.57 4.57 0 0 0 7.7 8.98zm3.32 10.77a3.44 3.44 0 0 0 2.42-1.1c.66-.69.99-1.51.99-2.47 0 .96.33 1.78.99 2.47a3.42 3.42 0 0 0 2.41 1.1c-.95.04-1.75.41-2.41 1.1a3.44 3.44 0 0 0-.99 2.47c0-.96-.33-1.78-.99-2.47a3.5 3.5 0 0 0-2.42-1.1zm6.81-4.74a3.42 3.42 0 0 0 2.41-1.1c.66-.69.98-1.51.98-2.48 0 .96.33 1.78.99 2.47s1.47 1.06 2.42 1.1c-.95.04-1.76.41-2.42 1.1a3.44 3.44 0 0 0-.99 2.47c0-.96-.33-1.78-.98-2.47a3.45 3.45 0 0 0-2.41-1.09z" stroke="none" />
        </svg>
    );
}
