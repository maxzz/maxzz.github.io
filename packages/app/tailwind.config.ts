import colors from 'tailwindcss/colors';
import debugStyles from './tailwind/tailwnid-plugin-debug-styles';
import debugScreens from './tailwind/tailwind-plugin-debug-screens.js';
import forms from '@tailwindcss/forms';
import overflowOverlay from './tailwind/tailwind-plugin-overflow-overlay';
import colorsBridge from './tailwind/tailwind-plugin-colors-bridge';

// const colors = require('tailwindcss/colors');
// const debugStyles = require('./tailwind/tailwnid-plugin-debug-styles');
// const debugScreens = require('./tailwind/tailwind-plugin-debug-screens');
// const forms = require('@tailwindcss/forms');
// const overflowOverlay = require('./tailwind/tailwind-plugin-overflow-overlay');
// const colorsBridge = require('./tailwind/tailwind-plugin-colors-bridge');

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
        // debugStyles,
        // debugScreens,
        // forms,
        // overflowOverlay,
        // colorsBridge([
        //     {
        //         prefix: '--tm-',
        //         groupName: 'primary',
        //     },
        // ]),
    ],
};
