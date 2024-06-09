import { Box, Button, Grid, Tab, Tabs, Typography } from '@mui/material';
import TextLogo from '../../logo/TextLogo';
import { Link } from 'react-router-dom';
import './landing.scss';
import Logo from '../../logo/Logo';
import { useState } from 'react';

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
      <Grid container item className="bodySection">
        <Grid
          container
          item
          xs={12}
          className="bodySection"
          justifyContent="center"
          direction="column"
          sx={{ padding: '20px', flexGrow: 1, minHeight: '100vh' }}
        >
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
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Tab key={i} label={`Tab ${i + 1}`} />
            ))}
          </Tabs>
          {[...Array(5)].map((_, i) => (
            <Box key={i} display={value === i ? 'block' : 'none'}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h4">Feature {i + 1}</Typography>
                  <Typography variant="body1">
                    Details about feature {i + 1}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {/* Placeholder for image */}
                  <Box
                    sx={{ height: 200, width: '100%', bgcolor: 'grey.300' }}
                  />
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
