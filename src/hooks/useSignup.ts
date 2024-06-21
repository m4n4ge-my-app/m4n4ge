import { useState } from 'react';
import { SignupSchema } from '../components/form/schemas/signupSchema';
import { useDispatch } from 'react-redux';
import { setUser } from '../state/user/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useSingup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

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
        //save the user to local storage
        localStorage.setItem('user', JSON.stringify(json));
        //update the redux store
        // dispatch(setUser(json));
        //set the loading state to false
        setIsLoading(false);
        //redirect to the dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };
  return { signup, isLoading, error };
};
