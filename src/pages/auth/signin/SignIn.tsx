import { Grid, Box, Stack } from '@mui/material';
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
          sm={6}
          className="leftSide"
          display={{ xs: 'none', sm: 'block' }}
        >
          Welcome Text
        </Box>
        <Grid item xs={12} sm={6} className="rightSide">
          This is signin form area
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
