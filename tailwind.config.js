module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
