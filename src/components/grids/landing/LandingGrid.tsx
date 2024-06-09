import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import TextLogo from '../../logo/TextLogo';
import { Link } from 'react-router-dom';
import './landing.scss';
import Logo from '../../logo/Logo';
import Features from './Features';
import { useState } from 'react';
import { callToAction } from './callToAction';

const LandingGrid = () => {
  const [isInterested, setIsInterested] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Grid item xs={6} sm={4} md={2} onClick={() => setIsInterested(false)}>
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
      {!isInterested && (
        <Grid container spacing={3} className="bodySection">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#264a99',
                fontWeight: 'bold',
                margin: '10% 15% 5% 12%',
              }}
            >
              {callToAction.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#6695ff',
                fontWeight: 'normal',
                marginBottom: '20px',
                margin: '0% 15% 5% 15%',
              }}
            >
              {callToAction.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsInterested(true)}
              sx={{ width: '200px', margin: '0% 15% 5% 15%' }}
            >
              Learn More
            </Button>
          </Grid>
          {!isSmallScreen && (
            <Grid
              item
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={callToAction.image}
                alt="Call to action"
                style={{
                  maxWidth: '550px',
                  maxHeight: '550px',
                  height: 'auto',
                  width: 'auto',
                  margin: '5% 15% 5% 15%',
                }}
              />
            </Grid>
          )}
        </Grid>
      )}
      {isInterested && <Features />}
    </Grid>
  );
};

export default LandingGrid;
