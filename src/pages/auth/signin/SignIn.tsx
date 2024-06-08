import AuthGrid from '../../../components/grids/auth/AuthGrid';
import './signin.scss';

const SignIn = () => {
  return (
    <AuthGrid
      messageTitle="Welcome Back!"
      message="Your journey awaits, log in to continue."
      form={<div>Sign In Form</div>}
    />
  );
};

export default SignIn;
