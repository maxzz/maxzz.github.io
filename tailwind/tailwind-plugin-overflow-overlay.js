const plugin = require('tailwindcss/plugin');

// Don't use plugin: tailwind cannot have two overlays: auto and overlay at the same time and will break for Firefox. Use index.css instead.

module.exports = plugin(function ({ addUtilities }) {
    const utils = {
        '.overflow-overlay': {
            'overflow': 'auto',
        },

        '.overflow-y-overlay': {
            'overflow-y': 'auto',
        },

        '.overflow-x-overlay': {
            'overflow-x': 'auto',
        },

        // '@supports (overflow: overlay)': {
        //     '.overflow-overlay': {
        //         'overflow': 'overlay',
        //     },

        //     '.overflow-y-overlay': {
        //         'overflow-y': 'overlay',
        //     },

        //     '.overflow-x-overlay': {
        //         'overflow-x': 'overlay',
        //     }
        // },

        '@supports (overflow: overlay)': {
            '.overflow-overlay': {
                'overflow': 'overlay',
            },
        },

        '@supports (overflow-y: overlay)': {
            '.overflow-y-overlay': {
                'overflow-y': 'overlay',
            },
        },

        '@supports (overflow-x: overlay)': {
            '.overflow-x-overlay': {
                'overflow-x': 'overlay',
            }
        },

        // '.overflow-overlay': {
        //     'overflow': 'auto',
        //     'overflow': 'overlay',
        // },
        // '.overflow-y-overlay': {
        //     'overflow-y': 'auto',
        //     'overflow-y': 'overlay',
        // },
        // '.overflow-x-overlay': {
        //     'overflow-x': 'auto',
        //     'overflow-x': 'overlay',
        // },
    };
    addUtilities(utils);
});
