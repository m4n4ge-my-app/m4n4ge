import { Grid, Box, Stack, Typography } from '@mui/material';
import TextLogo from '../../../components/logo/TextLogo';
import signin from './signin.png';
import signup from './signup.png';
import React, { useEffect } from 'react';
import './authgrid.scss';

interface Props {
  type: string;
  messageTitle: string;
  message: string;
  form: React.ReactNode;
}

const AuthGrid = ({ type, messageTitle, message, form }: Props) => {
  useEffect(() => {
    // Dynamically set the CSS variable
    switch (type) {
      case 'signup':
        document.documentElement.style.setProperty(
          '--auth-background-image-url',
          `url(${signup})`
        );
        break;
      case 'signin':
        document.documentElement.style.setProperty(
          '--auth-background-image-url',
          `url(${signin})`
        );
        break;
      default:
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${signup})`
        );
        break;
    }
  }, [type]);

  return (
    <Grid container className="signinContainer">
      <Grid item xs={12} className="header">
        <Stack className="logo">
          <TextLogo />
        </Stack>
      </Grid>
      <Grid container item className="lowerSection">
        <Box
          component={Grid}
          item
          md={6}
          className="leftSide"
          display={{ sm: 'none', md: 'block' }}
        >
          <Box className="welcomeText">
            <Typography
              variant="h4"
              style={{
                color: '#264a99',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
            >
              {messageTitle}
            </Typography>
            <Typography
              variant="h5"
              style={{
                color: '#6695ff',
                fontWeight: 'normal',
                marginBottom: '20px',
              }}
            >
              {message}
            </Typography>
          </Box>
        </Box>
        <Grid item sm={12} md={6} className="rightSide">
          <div className="formContainer">{form}</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthGrid;
