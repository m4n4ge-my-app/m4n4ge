import SignUpForm from '../../../components/form/forms/SignUpForm';
import AuthGrid from '../../../components/grids/auth/AuthGrid';

const SignUp = () => {
  return (
    <AuthGrid
      type="signup"
      messageTitle="Start your journey with us!"
      message="Register to create a new account."
      form={<SignUpForm />}
    />
  );
};

export default SignUp;
