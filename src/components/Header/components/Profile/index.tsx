import { Box, Button, useTheme } from '@mui/material';
import { getStyles } from './styles';

export const Profile = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Box sx={styles.profileContainer} data-testid="header-profile">
      <Button>Username</Button>
    </Box>
  );
};
