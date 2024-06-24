/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                kumbh: ["Kumbh Sans", "sans-serif"]
            },
            colors: {
                e_orange: "hsl(26, 100%, 55%)",
                e_pale_orange: "hsl(25, 100%, 94%)",

                e_very_dark_blue: "hsl(220, 13%, 13%)",
                e_dark_grayish_blue: "hsl(219, 9%, 45%)",
                e_grayish_blue: "hsl(220, 14%, 75%)",
                e_light_grayish_blue: "hsl(223, 64%, 98%)"
            }
        },
    },
    plugins: [],
}

