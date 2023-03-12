import { Box, Typography, useTheme } from '@mui/material';
import { aboutCards, heroesCards } from './cards';
import { CSSProperties } from 'react';
import { Cards } from './components/Cards';
import MainBackground from './images/main.jpg';
import { getStyles } from './styles';

const Home = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <Box sx={styles.main}>
        <img
          style={styles.mainImage as CSSProperties}
          src={MainBackground}
          alt="background"
        />
        <Typography variant="h2" sx={{ color: 'secondary.main', fontSize: 72 }}>
          BOOKS
        </Typography>
        <Typography variant="h2" sx={{ color: 'primary.main', fontSize: 72 }}>
          club
        </Typography>
        <h3 style={{ marginTop: theme.spacing(11.5) }}>
          This application allows you to unite people with a common interest -
          reading books. The functionality allows users to share their opinions
          by writing book reviews, allows you to create rooms for joint
          discussion of books with the possibility of creating a video chat. In
          addition, the functionality of the application allows you to make
          personal notes about the book you read
        </h3>
      </Box>
      <Box sx={styles.about}>
        <Typography variant="h2" sx={styles.title}>
          About Us
        </Typography>
        <Box sx={styles.aboutBackground}></Box>
        <Cards cards={aboutCards} />
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
