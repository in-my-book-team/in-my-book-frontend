import { Box, Button, Link, useTheme } from '@mui/material';
import { Link as LinkType } from '../../types';
import Logo from './images/Logo.svg';
import { Paths } from '../../constants';
import { Profile } from './components/Profile';
import React from 'react';
import { getStyles } from './styles';
import { useNavigate } from 'react-router-dom';

type Props = {
  isAuthenticated: boolean;
  links: LinkType[];
};

export const Header: React.FC<Props> = ({ isAuthenticated, links }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigate = useNavigate();

  const registrationOnClick = (path: LinkType['path']) => {
    navigate(path);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.logoContainer}>
        <img src={Logo} alt="In My Book Application Logo" />
      </Box>
      <Box sx={styles.links}>
        {links.map((link) => (
          <Link href={link.path} key={link.name} sx={styles.link}>
            {link.name}
          </Link>
        ))}
      </Box>
      {isAuthenticated ? (
        <Profile />
      ) : (
        <Box
          sx={styles.registrationContainer}
          data-testid={'header-registration'}
        >
          <Button onClick={() => registrationOnClick(Paths.home)}>
            Sign In
          </Button>
          <Button
            onClick={() => registrationOnClick(Paths.home)}
            sx={styles.signUp}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
};
