import { createTheme, createThemeContract } from '@vanilla-extract/css';

const SYSTEM_FONT_STACK = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

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
  font: {
    body: ``,
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
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  boxShadow: {
    sm: ``,
    md: ``,
    lg: ``,
  },
  radii: {
    sm: ``,
    md: ``,
    full: ``,
  },
});

const commonVars = {
  font: {
    body: SYSTEM_FONT_STACK,
  },
  space: {
    xs: `0.25rem`, // 4px
    sm: `0.5rem`, // 8px
    md: `1rem`, // 16px
    lg: `1.5rem`, // 24px
    xl: `2.5rem`, // 40px
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
    sm: `0.2rem`,
    md: `0.4rem`,
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
    body: colors.grey[700],
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
    body: colors.grey[700],
    heading: colors.black,
    caption: colors.blueGrey[100],
    background: colors.grey[800],
    link: colors.purple[100],
    linkHover: colors.purple[500],
    ...colors,
  },
  ...commonVars,
});
