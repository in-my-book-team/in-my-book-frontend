import { Box, useTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import Home from '../../pages/Home';
import { Paths } from '../../constants';
import { getStyles } from './styles';

const links = [
  { path: Paths.home, name: 'Home' },
  { path: Paths.home, name: 'Rooms' },
  { path: Paths.home, name: 'Books' },
];

const App = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  // TODO: alert wrapper
  return (
    <Box sx={styles.container}>
      <BrowserRouter>
        <Header isAuthenticated={false} links={links} />
        <Routes>
          <Route path={Paths.home} element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
