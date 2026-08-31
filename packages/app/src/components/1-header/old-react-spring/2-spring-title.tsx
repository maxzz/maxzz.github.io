import { a, useSpring } from "@react-spring/web";

const textStroke = { WebkitTextStrokeColor: 'var(--color-primary-500)', WebkitTextStrokeWidth: .5 };

export function SpringTitle() {
    const styles = useSpring({
        from: {
            scaley: '10%',
            scalex: '50%',
            transformOrigin: 'left center',
        },
        to: [
            { scaley: '100%', config: { duration: 200 }, },
            { scaley: '400%', },
            { scaley: '100%', },
            { scalex: '100%', },
        ],
        //config: { duration: 2000, },
    });
    /*
    const styles = useSpring({
        from: {
            scaley: '10%',
            scalex: '10%',
            transformOrigin: 'center',
        },
        to: [
            { scaley: '100%', config: { duration: 100 }, },
            { scaley: '400%', scalex: '20%', config: { duration: 100 }, },
            { scaley: '20%', scalex: '100%', config: { duration: 100 } },
            { scaley: '100%', scalex: '160%', transformOrigin: 'left center', },
            { scalex: '100%', config: config.wobbly },
        ],
        //config: { duration: 2000, },
    });
    */
    return (
        <div className="overflow-hidden">
            <a.div className="text-xl sm:text-4xl text-primary-700" style={{ ...styles, ...textStroke }}>
                Directory of ...
            </a.div>
        </div>
    );
}
