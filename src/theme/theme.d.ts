import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    main: string;
    light?: string;
    lighter?: string;
    dark?: string;
    darker?: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypeBackground extends PaletteColorOptions {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypeText extends PaletteColorOptions {}

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
