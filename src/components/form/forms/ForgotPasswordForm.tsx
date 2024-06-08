import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import { RHFTextField } from '../formControllers/RHFTextField';
import { AuthSchema } from '../schemas/authSchema';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  return (
    <Card>
      {/* Box container is to give responsive padding for various sizes */}
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
        <Grid container>
          <Grid item xs={12}>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Typography variant="h5" sx={{ marginBottom: '5px' }}>
                Reset your password
              </Typography>
              <Typography variant="body2" sx={{ textDecoration: 'none' }}>
                Enter your email address and we will send you intructions on how
                to reset your password
              </Typography>
            </Stack>

            <RHFTextField<AuthSchema>
              name="signin_email"
              label="Email"
              size="small"
              fullWidth
              sx={{ margin: '20px 0px 20px 0px' }}
            />

            <Button
              fullWidth
              size="medium"
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                marginTop: '30px',
                '&:focus': {
                  outline: 'none',
                },
                marginBottom: '10px',
              }}
            >
              Send
            </Button>

            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Typography variant="body2">Remember now? Awesome, </Typography>
              <Typography
                component={Link}
                to="/signup"
                variant="body2"
                sx={{ textDecoration: 'none' }}
                color="primary"
              >
                <Box sx={{ margin: 1 }}>Sign In!</Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ForgotPasswordForm;
