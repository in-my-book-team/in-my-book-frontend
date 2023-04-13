import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  container: {
    display: 'flex',
  },
});
