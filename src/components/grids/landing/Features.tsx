import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { appFeatures } from './appFeatures';
import theme from '../../../theme';
import './landing.scss';

const Features = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
                  <List sx={{ marginBottom: '20px' }}>
                    {feature.description.map((point, index) => (
                      <ListItem key={index} alignItems="flex-start">
                        <ListItemIcon>
                          <TaskAltIcon
                            style={{ color: theme.palette.primary.main }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          style={{
                            color: '#6695ff',
                            fontWeight: 'normal',
                            marginBottom: '20px',
                            fontSize: '1.2em',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Link to="/signup">
                    {i === appFeatures.length - 1 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<RocketLaunchIcon />}
                      >
                        Convinced? {"Let's get you on onboard!"}
                      </Button>
                    ) : (
                      <Button variant="contained" color="primary">
                        {"Let's Get Started!"}
                      </Button>
                    )}
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
    </>
  );
};

export default Features;
