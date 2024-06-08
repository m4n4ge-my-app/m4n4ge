import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
const SignUpForm = () => {
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
              <Typography variant="h5">Sign Up</Typography>
              <Typography
                component={Link}
                to="/signin"
                variant="body2"
                sx={{ textDecoration: 'none' }}
                color="primary"
              >
                Already have an account?
              </Typography>
            </Stack>
          </Grid>

          {/* Form area */}
          <Grid item xs={12}>
            {/* Stack group for email/password login option */}
            <Stack spacing={2}>
              {/* First Name Input */}
              <Box display="flex" justifyContent="spece-between" gap={3}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  size="small"
                />
                {/* LAst Name Input */}
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                />
              </Box>
              {/* Email Input */}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                type="email"
              />
              {/* Password Input */}
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                type="password"
              />
              {/* Retype Password Input */}
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                size="small"
                type="password"
              />
              {/* Login button */}
            </Stack>

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
              }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default SignUpForm;
