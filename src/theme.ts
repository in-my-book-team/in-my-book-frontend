import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    main: string;
    light: string;
    lighter: string;
    dark: string;
    darker: string;
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
      lighter: '',
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
      light: '#',
      lighter: '#',
      dark: '#5F2120',
      darker: 'rgba(232, 85, 77, 0.9)',
    },
    warning: {
      main: '#E8554D',
      light: '#',
      lighter: '#',
      dark: '#',
      darker: '#E76760',
    },
    info: {
      main: '#',
      light: '#',
      lighter: '#',
      dark: '#',
      darker: '#',
    },
    success: {
      main: '#EDF7ED',
      light: '#',
      lighter: '#',
      dark: '#',
      darker: '#1E4520',
    },
  },
});
