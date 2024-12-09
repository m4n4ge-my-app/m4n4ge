import axios, { AxiosResponse } from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL as string;

export const getAllDocuments = async (token: string) => {
  try {
    const response: AxiosResponse = await axios.get(
      baseUrl + '/api/documents',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
