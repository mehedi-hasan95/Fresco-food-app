/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "orange-theme": "#FF770F",
                "red-theme": "#F02B2F",
                bg1: "#FEE8DE",
                bg2: "#FDE7DD",
                bg3: "#FFF2EE",
            },
            fontFamily: {
                berkshire_swash: ["var(--font-berkshire-swash)"],
                tilt_prism: ["var(--font-tilt-prism)"],
            },
        },
    },
    plugins: [],
};
