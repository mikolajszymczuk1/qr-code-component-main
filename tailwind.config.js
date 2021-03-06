module.exports = {
    content: [
        "./public/**/*.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            "white": "hsl(0, 0%, 100%)",
            "light-gray": "hsl(212, 45%, 89%)",
            "grayish-blue": "hsl(220, 15%, 55%)",
            "dark-blue": "hsl(218, 44%, 22%)"
        },
        fontFamily: {
            "body": ["Outfit", "sans-serif"],
        },
        screens: {
            "sm": "375px",
            "lg": "1440px"
        },
        extend: {
            margin: {
                "22": "5.5rem",
                "38": "9.5rem"
            },
            fontSize: {
                "heading": "1.4em",
                "paragraph": "0.95em"
            },
            dropShadow: {
                "card": "0 15px 15px hsl(218, 44%, 22%, 0.1)"
            }
        }
    }
};
