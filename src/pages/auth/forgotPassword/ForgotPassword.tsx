import ForgotPasswordForm from '../../../components/form/forms/ForgotPasswordForm';
import AuthGrid from '../../../components/grids/auth/SignupGrid';

const ForgotPassword = () => {
  return (
    <AuthGrid
      type="forgotPassword"
      messageTitle="Forgot your password?"
      message="No worries. Just enter your email to get started."
      form={<ForgotPasswordForm />}
    />
  );
};

export default ForgotPassword;
