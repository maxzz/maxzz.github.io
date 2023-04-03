import { HTMLAttributes } from "react"; //https://codepen.io/maxzz/pen/LYJwNoq
import styles from './star.module.css';

console.log('styles', styles);

export function Star({ ...rest }: HTMLAttributes<HTMLElement>) {
    return (
        <div className={`${styles.star} w-4 h-4 [--dur:2.5s]`} {...rest}>
        </div>
    );
}
