/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "0 16px 33px -15px rgba(0, 0, 0, 1)",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
