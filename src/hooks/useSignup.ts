import { useState } from 'react';
import { SignupSchema } from '../components/form/schemas/signupSchema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { show } from '../state/feeback/feedbackSlice';
import { setUser } from '../state/user/userSlice';

const baseUrl = import.meta.env.VITE_BASE_URL as string;

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async (data: SignupSchema) => {
    setIsLoading(true);
    const { firstName, lastName, email, password } = data;
    const payload = { firstName, lastName, email, password };

    try {
      const response = await axios.post(baseUrl + '/api/auth/signup', payload);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const json = response.data;

      if (response.status !== 200) {
        setIsLoading(false);
      }

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(json));
        setIsLoading(false);
        dispatch(setUser(json));
        dispatch(
          show({
            message: `Welcome aboard ${json.firstName}! Signup successful.`,
            severity: 'success',
          })
        );
        navigate('/dashboard');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Now TypeScript knows error is an AxiosError, so error.response is accessible
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const errorMessage = error.response?.data.error as string | undefined;
        if (errorMessage) {
          dispatch(
            show({
              message: errorMessage,
              severity: 'error',
            })
          );
        } else {
          // Handle case where error.response.data.error is not available
          dispatch(
            show({
              message: 'An unexpected error occurred',
              severity: 'error',
            })
          );
        }
      } else {
        // Handle any non-Axios errors
        dispatch(
          show({
            message: 'An unexpected error occurred',
            severity: 'error',
          })
        );
      }
    }
  };
  return { signup, isLoading };
};
