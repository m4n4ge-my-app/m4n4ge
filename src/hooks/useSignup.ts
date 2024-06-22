import { useState } from 'react';
import { SignupSchema } from '../components/form/schemas/signupSchema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAuthState } from '../state/authentication/authSlice';
import { show } from '../state/feeback/feedbackSlice';

export const useSingup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async (data: SignupSchema) => {
    setIsLoading(true);
    setError(null); //reset error here because if previous request failed, error will persist for this request if not reset
    const { firstName, lastName, email, password } = data;
    const payload = { firstName, lastName, email, password };

    try {
      const response = await axios.post('/api/auth/signup', payload);
      const json = response.data;

      if (response.status !== 200) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(json));
        setIsLoading(false);
        dispatch(setAuthState(true));
        dispatch(
          show({
            message: 'Welcome aboard! Signup successful.',
            severity: 'success',
          })
        );
        navigate('/dashboard');
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };
  return { signup, isLoading, error };
};
