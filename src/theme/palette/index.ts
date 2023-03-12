import createPalette from '@mui/material/styles/createPalette';

export const palette = createPalette({
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
    main: '#FBF5F0',
    light: '#FFFFFF',
    dark: '#4B8E75',
    darker: '#D6D6D6',
  },
  text: {
    main: '#122449',
    light: '#FFFFFF',
    lighter: '#E0400F',
    dark: '#000000',
    darker: '#000000b3',
  },
  error: {
    main: '#FDEDED',
    dark: '#5F2120',
    darker: '#e8554de6',
  },
  warning: {
    main: '#E8554D',
    darker: '#E76760',
  },
  success: {
    main: '#EDF7ED',
    darker: '#1E4520',
  },
});
