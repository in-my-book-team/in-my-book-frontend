import { Box, Link, Typography, useTheme } from '@mui/material';
import { ReactComponent as GithubIcon } from './images/gh-icon.svg';
import { getStyles } from './styles';

export const Footer = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.github}>
        <GithubIcon />
        <Link
          href="https://github.com/in-my-book-team"
          target="_blank"
          sx={styles.githubLink}
        >
          GitHub
        </Link>
      </Box>
      <Typography
        sx={{ fontSize: 12, fontWeight: theme.typography.fontWeightBold }}
      >
        Copyright © 2023. All rights reserved
      </Typography>
    </Box>
  );
};
