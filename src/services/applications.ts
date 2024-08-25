import axios, { AxiosResponse } from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL as string;

const workModelMapping: { [key: string]: string } = {
  '1': 'On-Site',
  '2': 'Hybrid',
  '3': 'Remote',
};

const reverseWorkModelMapping: { [key: string]: string } = {};
for (const key in workModelMapping) {
  if (workModelMapping.hasOwnProperty(key)) {
    reverseWorkModelMapping[workModelMapping[key]] = key;
  }
}

export const getKeyByWorkModel = (value: string): string | undefined => {
  return reverseWorkModelMapping[value];
};

export const getApplications = async (token: string) => {
  try {
    const response: AxiosResponse = await axios.get(
      baseUrl + '/api/applications',
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

export const addApplication = async (token: string, data: any) => {
  data.workModel = workModelMapping[data.workModel[0]];
  try {
    const response: AxiosResponse = await axios.post(
      baseUrl + '/api/applications',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('error from addApplication', error);
    return error;
  }
};

export const editApplication = async (token: string, data: any, id: string) => {
  data.workModel = 'On-Site'; //this is temporary
  try {
    const response: AxiosResponse = await axios.patch(
      baseUrl + `/api/applications/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('error from editApplication', error);
    return error;
  }
};

export const getApplicationDetails = async (token: string, id: string) => {
  try {
    const response: AxiosResponse = await axios.get(
      baseUrl + `/api/applications/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('error from getApplicationDetails', error);
    return error;
  }
};

export const deleteApplication = async (token: string, id: string): Promise<AxiosResponse<any, any>> => {
  try {
    const response: AxiosResponse<any, any> = await axios.delete(
      baseUrl + `/api/applications/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('error from deleteApplication', error);
    return error;
  }
};
