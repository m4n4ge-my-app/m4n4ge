import { Grid, Box, Stack, Typography } from '@mui/material';
import TextLogo from '../../../components/logo/TextLogo';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import resetPassword from './resetpassword.png';
import React, { useEffect } from 'react';
import {
  AuthSchema,
  auth_schema,
  defaultValues,
} from '../../form/schemas/authSchema';
import signin from './signin.png';
import signup from './signup.png';
import './authgrid.scss';
import { Link } from 'react-router-dom';
interface Props {
  type: string;
  messageTitle: string;
  message: string;
  form: React.ReactNode;
}

const AuthGrid = ({ type, messageTitle, message, form }: Props) => {
  const methods = useForm<AuthSchema>({
    mode: 'all',
    resolver: zodResolver(auth_schema),
    defaultValues,
  });

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
      case 'forgotPassword':
        document.documentElement.style.setProperty(
          '--auth-background-image-url',
          `url(${resetPassword})`
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
    <FormProvider {...methods}>
      <Grid container className="signinContainer">
        <Grid item xs={12} className="header">
          <Stack className="logo">
            <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <TextLogo />
            </Link>
          </Stack>
        </Grid>
        <Grid container item className="lowerSection">
          <Box
            component={Grid}
            item
            md={6}
            className="leftSide"
            display={{ xs: 'none', sm: 'none', md: 'block' }}
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
    </FormProvider>
  );
};

export default AuthGrid;
