import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const colors = {
  black: '#383E3F', // typography heading color
  white: `#FFF`,
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  blueGrey: {
    100: '#A1ACBA', // typography caption color
    500: '#495565', // typography body color
    800: '#333B46',
  },
  purple: {
    50: `#F4F2FD`, // lightest, use for primary color
    100: `#DDDAFF`, // light, use for primary color
    200: '#C6C1F5',
    300: `#AAA2F1`,
    400: `#8E83EC`,
    500: `#7063e7`, // main, use for primary color
    600: `#3D2BDE`,
    700: `#291BAC`,
    800: `#1B1273`,
    900: `#0E0939`,
  },
};

export const breakpoints = {
  mobile: 420,
  tablet: 768,
  desktop: 1200,
};

export const vars = createThemeContract({
  colors: {
    primary: {
      lightest: ``,
      light: ``,
      main: ``,
    },
    heading: ``,
    body: ``,
    caption: ``,
    background: ``,
    link: ``,
    linkHover: ``,
    ...colors,
  },
  fontSize: {
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  fontWeights: {
    regular: ``,
    medium: ``,
    semibold: ``,
    bold: ``,
  },
  space: {
    '2xs': ``,
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
    '2xl': ``,
    '3xl': ``,
    '4xl': ``,
  },
  boxShadow: {
    sm: ``,
    md: ``,
    lg: ``,
  },
  radii: {
    sm: ``,
    md: ``,
    lg: ``,
    full: ``,
  },
});

const commonVars = {
  space: {
    '2xs': '0.4rem', // 6px
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.25rem', // 20px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    '2xl': '4rem', // 64px
    '3xl': '6rem', // 96px
    '4xl': '8rem', // 128px
  },
  fontSize: {
    xs: `0.8rem`, // 12px
    sm: `0.875rem`, // 14px
    md: `1rem`, // 16px
    lg: `1.25rem`, // 20px
    xl: `1.5rem`, // 24px
  },
  fontWeights: {
    regular: `400`,
    medium: `500`,
    semibold: `600`,
    bold: `700`,
  },
  boxShadow: {
    sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
    lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,
  },
  radii: {
    sm: `0.25rem`, // 4px
    md: `1rem`, // 16px
    lg: `1.25rem`, // 20px
    full: `100%`,
  },
};

export const lightThemeClass = createTheme(vars, {
  colors: {
    primary: {
      lightest: colors.purple[50],
      light: colors.purple[100],
      main: colors.purple[500],
    },
    body: colors.blueGrey[500],
    heading: colors.black,
    caption: colors.blueGrey[100],
    background: colors.grey[50],
    link: colors.purple[800],
    linkHover: colors.purple[500],
    ...colors,
  },
  ...commonVars,
});

export const darkThemeClass = createTheme(vars, {
  colors: {
    primary: {
      main: colors.purple[500],
      lightest: colors.purple[50],
      light: colors.purple[100],
    },
    body: colors.blueGrey[500],
    heading: colors.black,
    caption: colors.blueGrey[100],
    background: colors.grey[800],
    link: colors.purple[100],
    linkHover: colors.purple[500],
    ...colors,
  },
  ...commonVars,
});
