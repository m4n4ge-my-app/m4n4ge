import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import TextLogo from '../../logo/TextLogo';
import { Link } from 'react-router-dom';
import './landing.scss';
import Logo from '../../logo/Logo';
import { useState } from 'react';
import { appFeatures } from './appFeatures';

const LandingGrid = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <Box pr={{ xs: 2, sm: 3 }}>
            <Link to="/signin">
              <Button variant="outlined" color="primary" size="small">
                Sign In
              </Button>
            </Link>
          </Box>
          <Box pr={{ xs: 2, sm: 3 }}>
            <Link to="/signup">
              <Button variant="contained" color="primary" size="small">
                Sign Up
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Stack justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            '& .MuiTabs-indicator': {
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            position: 'sticky',
            top: 0,
          }}
        >
          {appFeatures.map((feature) => (
            <Tab key={feature.title} label={feature.title} />
          ))}
        </Tabs>
      </Stack>
      <Grid container item className="bodySection">
        <Grid
          container
          item
          xs={12}
          direction="column"
          sx={{
            padding: '20px',
            flexGrow: 1,
            minHeight: '100vh',
            height: 'auto',
          }}
        >
          {appFeatures.map((feature, i) => (
            <Box key={i} display={value === i ? 'block' : 'none'}>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  style={{ padding: '20px', paddingLeft: '100px' }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      color: '#264a99',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      fontSize: '1.5em',
                    }}
                  >
                    {feature.message}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: '#6695ff',
                      fontWeight: 'normal',
                      marginBottom: '20px',
                      fontSize: '1.2em',
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Link to="/signup">
                    <Button variant="contained" color="primary">
                      {"Let's Get Started!"}
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingTop: '40px',
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '50%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>{' '}
        <Grid
          container
          item
          xs={12}
          direction="column"
          sx={{ padding: '20px', flexGrow: 1, minHeight: '100vh' }}
        >
          {appFeatures.map((feature, i) => (
            <Box key={i} display={value === i ? 'block' : 'none'}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h4">{feature.title}</Typography>
                  <Typography variant="body1">{feature.message}</Typography>
                  <Typography variant="body2">{feature.description}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ height: 200, width: '100%' }}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingGrid;
