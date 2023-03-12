import { SxProps, Theme } from '@mui/material';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});
