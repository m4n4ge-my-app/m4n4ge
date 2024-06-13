import axios from 'axios';

interface Response {
  isAuthenticated: boolean;
}

export const checkAuth = async () => {
  try {
    const response: Response = await axios.get('/api/auth/check');
    return response.isAuthenticated;
  } catch (error) {
    console.error(error);
    return false;
  }
};
