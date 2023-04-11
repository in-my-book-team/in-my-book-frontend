import { breakpoints } from './breakpoints';
import { components } from './components';
import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  spacing: 4,
  breakpoints,
  typography,
  components,
});
