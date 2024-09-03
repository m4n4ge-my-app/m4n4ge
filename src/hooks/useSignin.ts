import { useState } from 'react';
import { SigninSchema } from '../components/form/schemas/signinSchema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUser } from '../state/user/userSlice';
import { show } from '../state/feeback/feedbackSlice';

const baseUrl = import.meta.env.VITE_BASE_URL as string;

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signin = async (data: SigninSchema) => {
    setIsLoading(true);

    try {
      const response = await axios.post(baseUrl + '/api/auth/signin', data);
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
            message: `Welcome back ${json.firstName}! let's continue your journey.`,
            severity: 'success',
          })
        );
        navigate('/dashboard');
      }
    } catch (error: unknown) {
      setIsLoading(false);

      // Check if the error is an AxiosError
      if (axios.isAxiosError(error)) {
        // Now TypeScript knows error is an AxiosError, so error.response is accessible
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const message = error.response?.data.error as string | undefined;

        dispatch(
          show({
            message: message ?? 'An un-expected error occurred',
            severity: 'error',
          })
        );
      } else {
        // Handle non-Axios errors
        dispatch(
          show({
            message: 'An un-expected error occurred',
            severity: 'error',
          })
        );
      }
    }
  };
  return { signin, isLoading };
};
