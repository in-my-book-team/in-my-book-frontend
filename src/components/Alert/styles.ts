import { AlertType } from '../../types';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  root: {
    fontSize: theme.typography.fontSize,
    width: '100%',
    marginTop: theme.spacing(22.5),
    boxShadow: `${theme.spacing(0, 0, 0.5)}, gray`, // TODO: get color from palette
  },
  [AlertType.SUCCESS]: {
    background: theme.palette.success.main,
  },
  [AlertType.ERROR]: {
    background: theme.palette.error.main,
  },
});
