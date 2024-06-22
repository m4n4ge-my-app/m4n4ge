import axios, { AxiosResponse } from 'axios';

interface Response {
  data: {
    isAuthenticated: boolean;
  };
}

export const checkAuth = async () => {
  try {
    const response: Response = await axios.get('/api/auth/check');
    if (
      response.data.isAuthenticated &&
      getCookieByName('userId') !== undefined
    ) {
      return true;
    } else if (
      response.data.isAuthenticated &&
      getCookieByName('userId') === undefined
    ) {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getLoggedInUser = async () => {
  const userId = getCookieByName('userId');

  try {
    if (userId) {
      const response: AxiosResponse = await axios.get(
        `/api/auth/users/${userId}`
      );
      return response;
    } else {
      return { message: 'No user ID found in cookies' };
    }
  } catch (error) {
    return null;
  }
};

const getCookieByName = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split(';').shift();
};

export const logout = async () => {
  try {
    await axios.get('/api/auth/logout');
  } catch (error) {
    console.error(error);
  }
};
