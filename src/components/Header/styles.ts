import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    padding: theme.spacing(0, 8),
    backgroundColor: theme.palette.background.light,
  },
  logoContainer: {
    width: '100%',
    maxWidth: theme.spacing(34),
  },
  links: {
    width: '100%',
    maxWidth: theme.spacing(220),
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  link: {
    textDecoration: 'none',
    fontWeight: theme.typography.fontWeightBold,
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: theme.spacing(1),
      textDecorationColor: theme.palette.secondary.dark,
      textDecorationThickness: theme.spacing(0.5),
    },
  },
  registrationContainer: {
    minWidth: theme.spacing(50),
  },
  signUp: {
    backgroundColor: 'secondary.main',
    color: 'text.light',
    '&:hover': {
      color: theme.palette.text.dark,
    },
  },
});
