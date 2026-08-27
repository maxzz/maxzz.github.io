const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./index.html', './src/**/*.{tsx,ts,js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: colors.slate,
                url: colors.slate[300],
            },

            // keyframes: {
            //     slidein: {
            //         '0%': { ransform: 'translateY(-100%)',},
            //         '100%': { transform: 'translateY(0)', }                    
            //     }
            // },
            // animation: {
            //     slidein: 'slidein 5s',
            // },
        },
    },
    plugins: [
        require('./tailwind/old-v3/tailwind-plugin-overflow-overlay'),
        require('./tailwind/old-v3/tailwind-plugin-debug-screens'),

        require('./tailwind/tailwnid-plugin-debug-styles'),
        require('./tailwind/tailwind-plugin-colors-bridge')([ { prefix: '--tm-', groupName: 'primary' }, ]),
        require('@tailwindcss/forms'),
    ],
};
