import AuthGrid from '../../../components/grids/auth/AuthGrid';

const SignUp = () => {
  return (
    <AuthGrid
      messageTitle="Start your adventure with us!"
      message="Register to create a new account"
      form={<h1>Sign Up Page</h1>}
    />
  );
};

export default SignUp;
