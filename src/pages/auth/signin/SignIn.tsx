import { Grid, Box, Stack, Typography } from '@mui/material';
import TextLogo from '../../../components/logo/TextLogo';
import './signin.scss';

const SignIn = () => {
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
              Welcome back!
            </Typography>
            <Typography
              variant="h5"
              style={{
                color: '#6695ff',
                fontWeight: 'normal',
                marginBottom: '20px',
              }}
            >
              Your journey awaits, log in to continue.
            </Typography>
          </Box>
        </Box>
        <Grid item sm={12} md={6} className="rightSide">
          This is signin form area
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
