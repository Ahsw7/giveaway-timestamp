const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                slate: colors.slate,
                zinc: colors.zinc,
            },
            fontFamily: {
                poppins: "'Poppins', sans-serif",
            },
        },
    },
    plugins: [],
};
