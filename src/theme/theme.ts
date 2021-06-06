export const theme = {
    space: [0, 4, 8, 16, 32, 64],
    breakpoints: ['40em', '52em', '64em'],
    typogprahy: {
        h1: {
            fontSize: 26,
            color: '#232323',
        },
        h2: {
            fontSize: 22,
            color: '#232323',
        },
        h3: {
            fontSize: 19,
            color: '#232323',
        },
        h4: {
            fontSize: 16,
            color: '#232323',
        },
        h5: {
            fontSize: 13,
            color: '#232323',
        },
        h6: {
            fontSize: 12,
            color: '#232323',
        },
        text: {
            fontSize: 14,
            color: '#232323',
        },
        line: {
            fontSize: 12,
            color: '#232323',
        },
    },
    colors: {
        blue: {
            900: '#026AA7',
        },
        black: {
            700: '#091e42',
        },
        white: {
            100: '#fff',
        },
        gray: {
            500: '#42526E',
        },
    },
};

export type MainTheme = typeof theme;
