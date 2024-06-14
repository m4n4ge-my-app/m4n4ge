import axios from 'axios';

interface Response {
  data: {
    isAuthenticated: boolean;
  };
}

export const checkAuth = async () => {
  try {
    const response: Response = await axios.get('/api/auth/check');
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const logout = async () => {
  try {
    await axios.get('/api/auth/logout');
  } catch (error) {
    console.error(error);
  }
};
