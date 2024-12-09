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

export const getPresignedUrl = async (token: string, documentId: string) => {
  try {
    const response: AxiosResponse = await axios.get(
      baseUrl + `/api/documents/${documentId}/presignedUrl`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.presignedUrl;
  } catch (error) {
    return null;
  }
};

export const deleteDocument = async (token: string, documentId: string) => {
  try {
    const response: AxiosResponse = await axios.delete(
      baseUrl + `/api/documents/${documentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return null;
  }
};