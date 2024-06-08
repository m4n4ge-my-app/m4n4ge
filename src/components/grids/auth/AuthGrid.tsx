import { Grid, Box, Stack, Typography } from '@mui/material';
import TextLogo from '../../../components/logo/TextLogo';
import React from 'react';
import './authgrid.scss';

interface Props {
  messageTitle: string;
  message: string;
  form: React.ReactNode;
}

const AuthGrid = ({ messageTitle, message, form }: Props) => {
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
