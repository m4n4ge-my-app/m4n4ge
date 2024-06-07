import { Typography } from '@mui/material';
import TextLogo from '../../../components/logo/TextLogo';
import './signin.scss';

const SignIn = () => {
  return (
    <div className="signinContainer">
      <div className="logo">
        <TextLogo />
        <Typography
          variant="h4"
          className="welcomeText"
          style={{ color: '#407BFF', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Welcome back! Your journey awaits, log in to continue.
        </Typography>
      </div>
    </div>
  );
};

export default SignIn;
