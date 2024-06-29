import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            width: {
                'lg-width': '1024px',
            },
            fontFamily: {
                baloo: ['var(--Baloo)'],
            },
            colors: {
                'aid-blue': '#237feb',
                'aid-red': '#dc4430',
            },
            screens: {
                xl: { max: '1279px' },
                lg: { max: '1023px' },
                md: { max: '767px' },
                sm: { max: '576px' },
            },
        },
    },
    variants: {
        extend: {
            width: ['responsive'],
        },
    },
    plugins: [],
};
export default config;
