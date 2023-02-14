import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    main: string;
    light?: string;
    lighter?: string;
    dark?: string;
    darker?: string;
  }

  interface TypeBackground extends PaletteColorOptions {
    default: string;
    paper: string;
  }

  interface TypeText extends PaletteColorOptions {
    primary: string;
    secondary: string;
    disabled: string;
  }

  interface PaletteColor {
    primary: PaletteColorOptions;
    secondary: PaletteColorOptions;
    background: PaletteColorOptions;
    text: PaletteColorOptions;
    error: PaletteColorOptions;
    warning: PaletteColorOptions;
    info: PaletteColorOptions;
    success: PaletteColorOptions;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#122449',
      light: '#696969',
      lighter: '#0A88FC',
      dark: '#252525',
      darker: '#000000',
    },
    secondary: {
      main: '#E0400F',
      light: '#E8554D',
      lighter: '#ED8B16',
      dark: '#B5524C',
      darker: '#5F2120',
    },
    background: {
      main: '##FBF5F0',
      light: '#FFFFFF',
      dark: '#4B8E75',
      darker: '#D6D6D6',
    },
    text: {
      main: '#122449',
      light: '#FFFFFF',
      lighter: '#E0400F',
      dark: '#000000',
      darker: 'rgba(0, 0, 0, 0.7)',
    },
    error: {
      main: '#FDEDED',
      dark: '#5F2120',
      darker: 'rgba(232, 85, 77, 0.9)',
    },
    warning: {
      main: '#E8554D',
      darker: '#E76760',
    },
    success: {
      main: '#EDF7ED',
      darker: '#1E4520',
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
  typography: {
    fontSize: 15,
    h1: {
      fontSize: 72,
      '@media (max-width:320px)': {
        fontSize: 60,
      },
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      '@media (max-width:320px)': {
        fontSize: 24,
      },
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      '@media (max-width:320px)': {
        fontSize: 22,
      },
    },
    h4: {
      fontSize: 22,
      fontWeight: 700,
      '@media (max-width:320px)': {
        fontSize: 16,
      },
    },
    h5: {
      fontSize: 18,
      fontWeight: 500,
      '@media (max-width:320px)': {
        fontSize: 16,
      },
    },
    button: {
      fontSize: 16,
      fontWeight: 500,
    },
    body1: {
      fontSize: 15,
      fontWeight: 500,
      '@media (max-width:320px)': {
        fontSize: 12,
      },
    },
    body2: {
      fontSize: 12,
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});
