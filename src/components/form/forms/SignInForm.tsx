import { RHFTextField } from '../formControllers/RHFTextField';
import { AuthSchema } from '../schemas/authSchema';
import { Link } from 'react-router-dom';
import Facebook from './images/facebook.png';
import Google from './images/google.png';
import GitHub from './images/github.png';
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const SignInForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card>
      {/* Box container is to give responsive padding for various sizes */}
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
        {/* Grid is for giving spaces between rows and full widths witin the grid container */}
        <Grid container spacing={3}>
          {/* Top area */}
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              sx={{ mb: { xs: -0.5, sm: 0.5 } }}
            >
              <Typography variant="h5">Sign In</Typography>
              <Typography
                component={Link}
                to="/signup"
                variant="body2"
                sx={{ textDecoration: 'none' }}
                color="primary"
              >
                {"Don't have an account?"}
              </Typography>
            </Stack>
          </Grid>

          {/* Form area */}
          <Grid item xs={12}>
            {/* Stack group for email/password login option */}
            <Stack spacing={2}>
              {/* Email Input */}
              <RHFTextField<AuthSchema>
                name="signin_email"
                label="Email"
                size="small"
              />
              {/* Password Input */}
              <RHFTextField<AuthSchema>
                name="signin_password"
                label="Password"
                type="password"
                size="small"
              />
              {/* Forgot password link */}
              <Box display="flex" justifyContent="flex-end">
                <Typography
                  component={Link}
                  to="/forgotpassword"
                  variant="body2"
                  sx={{ textDecoration: 'none' }}
                  color="primary"
                >
                  Forgot password?
                </Typography>
              </Box>
              {/* Login button */}
              <Button
                fullWidth
                size="medium"
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                Sign In
              </Button>
            </Stack>

            {/*  Divider separating login methods */}
            <Divider sx={{ margin: '20px' }}>
              <Typography variant="caption">Sign in with</Typography>
            </Divider>

            {/* Stack group for ouath login */}
            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              justifyContent="space-around"
              sx={{
                '& .MuiButton-startIcon': {
                  mr: { xs: 0, sm: 1 },
                  ml: { xs: 0, sm: -0.5 },
                },
              }}
            >
              <Button
                variant="text"
                startIcon={
                  <img
                    src={Google}
                    alt="Google"
                    style={{ width: '20px', height: '20px' }}
                  />
                }
                sx={{
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                {!isSmallScreen ? 'Google' : ''}
              </Button>
              <Button
                variant="text"
                startIcon={
                  <img
                    src={GitHub}
                    alt="GitHub"
                    style={{ width: '20px', height: '20px' }}
                  />
                }
                sx={{
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                {!isSmallScreen ? 'GitHub' : ''}
              </Button>
              <Button
                variant="text"
                startIcon={
                  <img
                    src={Facebook}
                    alt="Facebook"
                    style={{ width: '20px', height: '20px' }}
                  />
                }
                sx={{
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                {!isSmallScreen ? 'Facebook' : ''}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default SignInForm;
