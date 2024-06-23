import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import { RHFTextField } from '../formControllers/RHFTextField';
import { Link } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { SignupSchema } from '../schemas/signupSchema';
import { useSingup } from '../../../hooks/useSignup';

const SignUpForm = () => {
  const { handleSubmit } = useFormContext<SignupSchema>();
  const { signup, isLoading } = useSingup();

  const onsubmit = async (data: SignupSchema) => {
    await signup(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
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
                <Typography variant="h5">Sign Up</Typography>
                <Typography
                  component={Link}
                  to="/signin"
                  variant="body2"
                  sx={{ textDecoration: 'none' }}
                  color="primary"
                >
                  Account holder? Sign in or use external account.
                </Typography>
              </Stack>
            </Grid>

            {/* Form area */}
            <Grid item xs={12}>
              {/* Stack group for email/password login option */}
              <Stack spacing={2}>
                <Box display="flex" justifyContent="spece-between" gap={3}>
                  {/* First Name Input */}
                  <RHFTextField<SignupSchema>
                    name="firstName"
                    label="First Name"
                    size="small"
                    fullWidth
                  />
                  {/* LAst Name Input */}
                  <RHFTextField<SignupSchema>
                    name="lastName"
                    label="Last Name"
                    size="small"
                    fullWidth
                  />
                </Box>
                {/* Email Input */}
                <RHFTextField<SignupSchema>
                  name="email"
                  label="Email"
                  size="small"
                  fullWidth
                />
                {/* Password Input */}
                <RHFTextField<SignupSchema>
                  name="password"
                  label="Password"
                  type="password"
                  size="small"
                  fullWidth
                />
                {/* Retype Password Input */}
                <RHFTextField<SignupSchema>
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  size="small"
                  fullWidth
                />
                {/* Login button */}
              </Stack>

              <Button
                fullWidth
                size="medium"
                type="submit"
                variant="contained"
                color="primary"
                disabled={Boolean(isLoading)}
                sx={{
                  marginTop: '30px',
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </form>
  );
};

export default SignUpForm;
