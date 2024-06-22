import SignInForm from '../../../components/form/forms/SignInForm';
import SigninGrid from '../../../components/grids/auth/SigninGrid';

const SignIn = () => {
  return (
    <SigninGrid
      type="signin"
      messageTitle="Welcome Back!"
      message="Your journey awaits, sign in to continue."
      form={<SignInForm />}
    />
  );
};

export default SignIn;
