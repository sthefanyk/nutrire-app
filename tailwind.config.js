/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            green_100: "#C5D984",
            green_200: "#AECC53",
            green_300: "#95C11F",
            green_400: "#46962B",
            green_500: "#006B2D",
            brown_100: "#FAEFDC",
            brown_200: "#592C05",
            brown_300: "#201014",
            purple: "#4F294A",
            red: "#C10B25",
            orange: "#EF7D00",
            yellow: "#EBBD00",
            honey: "#AC6006",
            light: "#FFFFFF",
            dark: "#1D1B20",
            default: "#FAEFDC",
            a: "#FAEFDC",
            b: "#FAEFDC",
            dark_search: "#202124",
            green_100_50: "#E1EBC1",
            brown_300_50: "#8F8789"
        },
        extend: {
            fontFamily: {
                'fresca': ['Fresca-Regular'],
                'montserrat-bold': ['Montserrat-Bold'],
                'montserrat-semibold': ['Montserrat-SemiBold'],
                'montserrat-medium': ['Montserrat-Medium'],
                'montserrat-regular': ['Montserrat-Regular'],
                'montserrat-light': ['Montserrat-Light'],
            },
        },
    },
    plugins: [],
}

