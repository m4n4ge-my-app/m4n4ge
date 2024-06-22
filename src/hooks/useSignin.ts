import { useState } from 'react';
import { SignupSchema } from '../components/form/schemas/signupSchema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAuthState } from '../state/authentication/authSlice';
import { show } from '../state/feeback/feedbackSlice';

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signin = async (data: SignupSchema) => {
    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/signin', data);
      const json = response.data;

      if (response.status !== 200) {
        setIsLoading(false);
      }

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(json));
        setIsLoading(false);
        dispatch(setAuthState(true));
        dispatch(
          show({
            message: "Welcome back! let's continue your journey.",
            severity: 'success',
          })
        );
        navigate('/dashboard');
      }
    } catch (error) {
      setIsLoading(false);
      dispatch(
        show({
          message: error.response.data.error as string,
          severity: 'error',
        })
      );
    }
  };
  return { signin, isLoading };
};
