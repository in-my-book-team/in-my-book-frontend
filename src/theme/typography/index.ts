import { Breakpoints } from '@mui/material/styles';
import { FontWeights } from './constants';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { breakpoints } from '../breakpoints';
import { palette } from '../palette';

const getTypography = (palette: PaletteOptions, breakpoints: Breakpoints) => ({
  fontSize: 15,
  h1: {
    fontSize: 72,
    color: palette.text?.main,
    [breakpoints.down('mobile')]: {
      fontSize: 60,
    },
  },
  h2: {
    fontSize: 48,
    fontWeight: FontWeights.BOLD,
    [breakpoints.down('mobile')]: {
      fontSize: 24,
    },
  },
  h3: {
    fontSize: 32,
    fontWeight: FontWeights.BOLD,
    [breakpoints.down('mobile')]: {
      fontSize: 22,
    },
  },
  h4: {
    fontSize: 22,
    fontWeight: FontWeights.BOLD,
    [breakpoints.down('mobile')]: {
      fontSize: 16,
    },
  },
  h5: {
    fontSize: 18,
    fontWeight: FontWeights.MEDIUM,
    [breakpoints.down('mobile')]: {
      fontSize: 16,
    },
  },
  button: {
    fontSize: 16,
    fontWeight: FontWeights.MEDIUM,
  },
  body1: {
    fontSize: 15,
    fontWeight: FontWeights.MEDIUM,
    [breakpoints.down('mobile')]: {
      fontSize: 12,
    },
  },
  body2: {
    fontSize: 12,
    fontWeight: FontWeights.BOLD,
  },
});

export const typography = getTypography(palette, breakpoints);
