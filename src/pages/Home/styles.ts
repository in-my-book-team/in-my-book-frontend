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
  },
  mainImage: {
    position: 'absolute',
    width: '100%',
    left: '0',
    top: '0',
    objectFit: 'cover',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.main,
  },
  about: {
    marginTop: theme.spacing(28.5),
    display: 'block',
    position: 'relative',
  },
  aboutBackground: {
    width: '100%',
    position: 'absolute',
    height: theme.spacing(62),
    zIndex: '-1',
    backgroundColor: theme.palette.background.dark,
  },
  heroes: {
    marginTop: theme.spacing(42.5),
    marginBottom: theme.spacing(25),
  },
  heroesContainer: {
    background: theme.palette.background.main,
    backgroundImage: `url(${HeroesBackground})`,
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(5),
  },
});
