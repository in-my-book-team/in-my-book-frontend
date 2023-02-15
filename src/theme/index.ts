import { breakpoints } from './breakpoints';
import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  spacing: 4,
  breakpoints,
  typography,
  // TODO: decouple components from root theme config
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
