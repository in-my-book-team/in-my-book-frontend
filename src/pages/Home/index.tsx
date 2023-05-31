import { Box, Typography, useTheme } from '@mui/material';
import { aboutCards, heroesCards } from './cards';
import { CSSProperties } from 'react';
import { Cards } from './components/Cards';
import MainBackground from './images/main.png';
import { getStyles } from './styles';

const Home = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <Box sx={styles.mainContainer}>
        <img
          style={styles.mainImage as CSSProperties}
          src={MainBackground}
          alt="background"
        />
        <Box sx={styles.mainContent}>
          <Typography
            variant="h2"
            sx={() => ({
              ...styles.title,
              ...styles.mainTitle,
              ...({ color: 'secondary.main' } as unknown as typeof styles),
            })}
          >
            BOOKS
          </Typography>
          <Typography
            variant="h2"
            sx={() => ({
              ...styles.title,
              ...styles.mainTitle,
              ...({ color: 'primary.main' } as unknown as typeof styles),
            })}
          >
            club
          </Typography>
          <Typography variant="h5" sx={styles.mainDescription}>
            This application allows you to unite people with a common interest -
            reading books. The functionality allows users to share their
            opinions by writing book reviews, allows you to create rooms for
            joint discussion of books with the possibility of creating a video
            chat. In addition, the functionality of the application allows you
            to make personal notes about the book you read
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.about}>
        <Typography variant="h2" sx={styles.title}>
          About Us
        </Typography>
        <Box sx={styles.aboutBackground}></Box>
        <Cards cards={aboutCards} highlighted />
      </Box>
      <Box sx={styles.heroes}>
        <Typography variant="h2" sx={styles.title}>
          Our Heroes
        </Typography>
        <Box sx={styles.heroesContainer}>
          <Cards cards={heroesCards} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
