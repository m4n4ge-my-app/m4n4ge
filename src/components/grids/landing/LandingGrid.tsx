import { Box, Button, Grid } from '@mui/material';
import TextLogo from '../../logo/TextLogo';
import { Link } from 'react-router-dom';
import './landing.scss';
import Logo from '../../logo/Logo';
import Features from './Features';

const LandingGrid = () => {
  return (
    <Grid container className="landingContainer">
      <Grid
        container
        item
        xs={12}
        className="navbar"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={6} sm={4} md={2}>
          <Box display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none' }}>
            <Logo />
          </Box>
          <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
            <TextLogo />
          </Box>
        </Grid>
        <Grid item xs={6} sm={8} md={10} container justifyContent="flex-end">
          <Box pr={{ xlxs: 2, sm: 3 }}>
            <Link to="/signin">
              <Button variant="outlined" color="primary">
                Sign In
              </Button>
            </Link>
          </Box>
          <Box pr={{ xs: 2, sm: 3 }}>
            <Link to="/signup">
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Features />
    </Grid>
  );
};

export default LandingGrid;
