import { HTMLAttributes, SVGProps } from "react";

export function IconList({ title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M8 9q-.42 0-.71-.29T7 8t.29-.71Q7.58 7 8 7h12q.42 0 .71.29T21 8t-.29.71Q20.42 9 20 9Zm0 4q-.42 0-.71-.29T7 12t.29-.71Q7.58 11 8 11h12q.42 0 .71.29T21 12t-.29.71q-.29.29-.71.29Zm0 4q-.42 0-.71-.29T7 16t.29-.71Q7.58 15 8 15h12q.42 0 .71.29T21 16t-.29.71q-.29.29-.71.29ZM4 9q-.42 0-.71-.29T3 8t.29-.71Q3.58 7 4 7t.71.29Q5 7.58 5 8t-.29.71Q4.42 9 4 9Zm0 4q-.42 0-.71-.29T3 12t.29-.71Q3.58 11 4 11t.71.29q.29.29.29.71t-.29.71Q4.42 13 4 13Zm0 4q-.42 0-.71-.29T3 16t.29-.71Q3.58 15 4 15t.71.29q.29.29.29.71t-.29.71Q4.42 17 4 17Z" />
        </svg>
    );
}
