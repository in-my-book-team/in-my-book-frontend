import { SxProps, Theme } from '@mui/material';
import HeroesBackground from './images/heroes/background.png';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  main: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(13.5),
    '& p, h2, h3': {
      position: 'relative',
      maxWidth: theme.spacing(100),
    },
    background: `linear-gradient(
      ${theme.palette.background.light} 0%, 
      ${theme.palette.background.light} 60%, 
      ${theme.palette.background.lighter}
      )`,
    [theme.breakpoints.down('desktop')]: {
      justifyContent: 'start',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.down('tablet')]: {
      fontSize: 14,
      padding: theme.spacing(0, 8),
    },
  },
  mainContent: {
    marginTop: theme.spacing(31),
  },
  mainContentTitle: {
    fontSize: 72,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 60,
    },
  },
  mainImage: {
    position: 'absolute',
    maxWidth: theme.spacing(196.5),
    bottom: 0,
    width: '100%',
    right: 0,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.main,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 32,
    },
  },
  about: {
    marginTop: theme.spacing(28.5),
    display: 'block',
    position: 'relative',
    [theme.breakpoints.down('desktop')]: {
      marginTop: theme.spacing(18),
    },
    [theme.breakpoints.down('tablet')]: {
      marginTop: theme.spacing(13),
    },
  },
  aboutBackground: {
    width: '100%',
    position: 'absolute',
    height: theme.spacing(62),
    zIndex: '-1',
    backgroundColor: theme.palette.background.dark,
    [theme.breakpoints.down('tablet')]: {
      display: 'none',
    },
  },
  heroes: {
    marginTop: theme.spacing(42.5),
    marginBottom: theme.spacing(25),
    [theme.breakpoints.down('desktop')]: {
      margin: theme.spacing(18, 0),
    },
    [theme.breakpoints.down('tablet')]: {
      margin: theme.spacing(13, 0),
    },
  },
  heroesContainer: {
    background: theme.palette.background.main,
    backgroundImage: `url(${HeroesBackground})`,
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(5),
  },
});
