import SignInForm from '../../../components/form/forms/SignInForm';
import AuthGrid from '../../../components/grids/auth/AuthGrid';

const SignIn = () => {
  return (
    <AuthGrid
      type="signin"
      messageTitle="Welcome Back!"
      message="Your journey awaits, sign in to continue."
      form={<SignInForm />}
    />
  );
};

export default SignIn;
