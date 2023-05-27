import { SxProps, Theme } from '@mui/material';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: theme.spacing(17.5),
    [theme.breakpoints.down('tablet')]: {
      marginTop: theme.spacing(5),
    },
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
      '&:not(:first-child)': {
        marginTop: theme.spacing(8),
      },
    },
  },
  title: {
    textTransform: 'uppercase',
    color: theme.palette.text.light,
    marginBottom: theme.spacing(12.5),
    fontWeight: theme.typography.fontWeightBold,
  },
  titleHighlighted: {
    background: theme.palette.background.dark,
    [theme.breakpoints.down('tablet')]: {
      width: '100vw',
      textAlign: 'center',
      padding: theme.spacing(5, 0),
    },
  },
  subtitle: {
    color: theme.palette.text.lighter,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: 'underline',
    textUnderlineOffset: theme.spacing(2),
    textDecorationColor: theme.palette.background.darker,
    textDecorationThickness: 1.5,
    marginBottom: theme.spacing(4),
  },
  image: {
    maxWidth: theme.spacing(50),
    flex: 1,
    marginBottom: theme.spacing(3),
    objectFit: 'cover',
  },
  borderedImage: {
    maxWidth: theme.spacing(50),
    maxHeight: theme.spacing(50),
    flex: 1,
    marginBottom: theme.spacing(3),
    objectFit: 'cover',
    border: `2px solid ${theme.palette.background.darker}`,
    borderRadius: theme.spacing(50),
  },
  description: {
    textAlign: 'center',
    maxWidth: theme.spacing(62.5),
    marginBottom: theme.spacing(5),
    lineHeight: 1.3,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.light,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      color: theme.palette.text.dark,
    },
  },
});
