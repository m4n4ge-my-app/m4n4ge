import SignUpForm from '../../../components/form/forms/SignUpForm';
import SignupGrid from '../../../components/grids/auth/SignupGrid';

const SignUp = () => {
  return (
    <SignupGrid
      type="signup"
      messageTitle="Start your journey with us!"
      message="Register to create a new account."
      form={<SignUpForm />}
    />
  );
};

export default SignUp;
