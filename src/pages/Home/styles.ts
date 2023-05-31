import { SxProps, Theme } from '@mui/material';
import HeroesBackground from './images/heroes/background.png';

export const getStyles = (theme: Theme): Record<string, SxProps> => ({
  mainContainer: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(14),
    '& p, h2, h5': {
      position: 'relative',
      maxWidth: theme.spacing(100),
    },
    background: `linear-gradient(
      ${theme.palette.background.light} 0%, 
      ${theme.palette.background.light} 90%, 
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
  mainTitle: {
    fontSize: 72,
    margin: 0,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 60,
    },
  },
  mainDescription: {
    marginTop: theme.spacing(10),
    background: `rgba(241, 224, 208, 0.65)`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
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
    marginBottom: theme.spacing(9),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.main,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 32,
    },
  },
  about: {
    marginTop: theme.spacing(20),
    display: 'block',
    position: 'relative',
    [theme.breakpoints.down('desktop')]: {
      marginTop: theme.spacing(20),
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
    margin: theme.spacing(20, 0),
    [theme.breakpoints.down('desktop')]: {
      margin: theme.spacing(20, 0),
    },
    [theme.breakpoints.down('tablet')]: {
      margin: theme.spacing(13, 0),
    },
  },
  heroesContainer: {
    background: theme.palette.background.main,
    backgroundImage: `url(${HeroesBackground})`,
    padding: theme.spacing(1),
  },
});
