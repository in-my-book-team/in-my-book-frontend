import { SxProps, Theme } from '@mui/material';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  container: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.background.darker,
    padding: theme.spacing(5),
  },
  github: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
  },
  githubLink: {
    textDecoration: 'none',
    fontSize: 12,
    marginLeft: theme.spacing(1),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
