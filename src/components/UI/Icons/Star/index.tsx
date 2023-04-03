import { HTMLAttributes } from "react"; //https://codepen.io/maxzz/pen/LYJwNoq
import './star.css';

export function Star({ ...rest }: HTMLAttributes<HTMLElement>) {
    return (
        <div className="gift__star gift__star--1 w-4 h-4 [--dur:2.5s]" {...rest}>
            11
        </div>
    );
}
